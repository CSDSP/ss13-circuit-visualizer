import {
    forceSimulation,
    forceLink,
    forceManyBody,
    forceX,
    forceY,
} from 'd3-force';
import {bboxCollide} from "d3-bboxCollide";
import {useNodesInitialized, useReactFlow} from "@xyflow/react";
import {useEffect, useMemo} from "react";
import {useStore} from "./store";

const simulation = forceSimulation()
    .force('charge', forceManyBody().strength(-1000))
    .force('x', forceX().x(0).strength(0.02))
    .force('y', forceY().y(0).strength(0.02))
    .force('collide', bboxCollide((node) => node.bbox))
    .alphaTarget(0.05)
    .stop();

const selector = (store) => ({
    updateFromSimulation: store.updateFromSimulation,
    fixedNodes: store.fixedNodes,
    simulationRunning: store.simulationRunning,
    edges: store.edges
})

export const useSimulation = () => {
    const { getNodes, setNodes} = useReactFlow();
    const initialized = useNodesInitialized();
    const { updateFromSimulation, fixedNodes, simulationRunning, edges } = useStore(selector)
    const shouldRun = simulationRunning && initialized && getNodes().length !== 0
    
    const nodes= useMemo(() => {
        if (!shouldRun) return
        const nodes = getNodes().map((node) => {
            const result = {
                x: node.position.x + node.measured.width / 2,
                y: node.position.y + node.measured.height / 2,
                id: node.id,
                bbox: [
                    [-node.measured.width / 1.9 - 25, -node.measured.height / 1.9],
                    [node.measured.width / 1.9 + 25, node.measured.height / 1.9]]};
            if (fixedNodes.has(node.id)) {
                result.fx = result.x;
                result.fy = result.y;
            }
            return result;
        });
        simulation.nodes(nodes).force(
            'link',
            forceLink(edges.map(edge => ({source: edge.source, target: edge.target})))
                .id((node) => node.id)
                .strength(0.2)
                .distance(100),
        ).alphaTarget(0.05);
        return nodes
    }, [edges, getNodes, shouldRun, fixedNodes])
    // force updates on data changes (
    useEffect(() => {
        if (!shouldRun) return
        let runningLocal = true
        const tick = () => {
            simulation.tick();
            updateFromSimulation(nodes);
            window.requestAnimationFrame(() => {
                // If the simulation hasn't been stopped, schedule another tick.
                if (runningLocal) tick();
            });
        };
        tick()
        return () => {runningLocal = false}
    }, [getNodes, nodes, setNodes, shouldRun, updateFromSimulation])
    return [initialized, shouldRun]
};