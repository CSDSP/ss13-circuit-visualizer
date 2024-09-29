import { applyNodeChanges, applyEdgeChanges } from '@xyflow/react';
import { nanoid } from 'nanoid';
import {create} from "zustand";

function getViewPortCenter(viewport) {
    return {
        x: (window.innerWidth / 2 - viewport.x) / viewport.zoom,
        y: (window.innerHeight / 2 - viewport.y) / viewport.zoom
    }
}

export const useStore = create((set, get) => ({
    nodes: [],
    edges: [],
    fixedNodes: new Set(),
    assemblyInfo: {type: "type-a electronic device"},
    simulationRunning: false,
    viewport: {x: 0, y: 0, zoom: 1},
    selection: {nodes: [], edges: []},

    onNodesChange(changes) {
        set({
            nodes: applyNodeChanges(changes, get().nodes),
        });
    },
    onEdgesChange(changes) {
        set({
            edges: applyEdgeChanges(changes, get().edges),
        });
    },
    addEdge(data) {
        const id = nanoid();
        const edge = { id, ...data };

        set({ edges: [...get().edges, edge] });
    },
    updateNode(id, data) {
        const { nodes, fixedNodes } = get()
        const transformedNodes = nodes.map(node =>
            node.id === id
                ? {...node, data: {...node.data, ...data}}
                : node);
        if (data.isFixed) {
            fixedNodes.add(id);
        } else {
            fixedNodes.delete(id);
        }
        const updatedFixedNodes = new Set(fixedNodes);
        set({nodes: transformedNodes, fixedNodes: updatedFixedNodes});
    },
    updateFromSimulation(simulationNodes) {
        // simulation nodes should always be in the same order as stored nodes
        // This could fail when a node is added or remove, but the simulation should restart at that point anyway
        set({nodes: get().nodes.map((node, i) =>
            node.id === simulationNodes[i].id && !node.data.isFixed
                ? {...node, position: {x: simulationNodes[i].x, y: simulationNodes[i].y}}
                : node
        )})
    },
    addNode(type) {
        const id = nanoid();
        const data = {name: type}
        const getResult = get()
        const position = getViewPortCenter(getResult.viewport)
        set({nodes: [...getResult.nodes, {
            id, type, data, position, origin: [0.5, 0.5]
        }]})
    },
    addCopied(nodes, edges) {
        if (nodes.length === 0) {
            return;
        }
        const nodeMap = new Map(nodes.map(((node, index) => [node.id, index])));
        const nodesUpdated = nodes.map(node => ({...node, id: nanoid(), selected: false}));
        const edgesUpdated = []
        for (const edge of edges) {
            const source = nodeMap.get(edge.source);
            const target = nodeMap.get(edge.target);
            if (source === undefined || target === undefined) {
                continue;
            }
            edge.source = nodesUpdated[source].id;
            edge.target = nodesUpdated[target].id;
            edge.id = nanoid()
            edgesUpdated.push(edge);
        }
        let minX = Infinity;
        let maxX = -Infinity;
        let minY = Infinity;
        let maxY = -Infinity;
        for (const node of nodesUpdated) {
            const position = node.position;
            minX = Math.min(minX, position.x);
            maxX = Math.max(maxX, position.x);
            minY = Math.min(minY, position.y);
            maxY = Math.max(maxY, position.y);
        }
        const oldCenter = {
            x: (minX + maxX) / 2,
            y: (minY + maxY) / 2
        };
        const getResult = get();
        const newCenter = getViewPortCenter(getResult.viewport);
        const offsetX = newCenter.x - oldCenter.x;
        const offsetY = newCenter.y - oldCenter.y;
        for (const node of nodesUpdated) {
            node.position.x += offsetX;
            node.position.y += offsetY;
        }
        set({
            nodes: [...getResult.nodes, ...nodesUpdated],
            edges: [...getResult.edges, ...edgesUpdated]})
    },
    updateAssembly(info) {
        set({assemblyInfo: {...get().assemblyInfo, ...info}});
    },
    loadAssembly(assembly) {
        set({
            assemblyInfo: assembly.assembly,
            nodes: assembly.components,
            edges: assembly.edges
        })
    },
    setSimulationRunning(running) {
        set({simulationRunning: running});
    },
    updateViewport(viewport) {
        set({viewport: viewport})
    },
    updateSelection(params) {
        set({selection: {...params}})
    }
}));