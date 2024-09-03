import { applyNodeChanges, applyEdgeChanges } from '@xyflow/react';
import { nanoid } from 'nanoid';
import {create} from "zustand";

export const useStore = create((set, get) => ({
    nodes: [],
    edges: [],
    fixedNodes: new Set(),
    assemblyInfo: {type: "type-a electronic device"},
    simulationRunning: false,

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

        set({ edges: [edge, ...get().edges] });
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
                ? {...node, position: {x: simulationNodes[i].x - node.measured.width / 2, y: simulationNodes[i].y - node.measured.height / 2}}
                : node
        )})
    },
    addNode(type) {
        const id = nanoid();
        const data = {name: type}
        const position = {x: 0, y : 0}
        set({nodes: [...get().nodes, {
            id, type, data, position
        }]})
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
    }
}));