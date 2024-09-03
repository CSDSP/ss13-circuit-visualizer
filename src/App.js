import React, {useCallback, useState} from 'react';
import {
    ReactFlow,
    MiniMap,
    Controls,
    Background, useReactFlow, Panel,
} from '@xyflow/react';
import { useStore } from './store';
import {CircuitNode} from "./CircuitNode";
import {DataTypes, NodeDetails} from "./NodeDetails";
import Popup from "reactjs-popup";
import {ExportAssembly, loadAssembly} from "./Assembly";
import {useSimulation} from "./ForceSimulation";
import {ComponentSelector} from "./ComponentSelector";

const appSelector = (store) => ({
    nodes: store.nodes,
    edges: store.edges,
    onNodesChange: store.onNodesChange,
    onEdgesChange: store.onEdgesChange,
    addEdge: store.addEdge,
    loadAssembly: store.loadAssembly,
    setSimulationRunning: store.setSimulationRunning
});

const nodeTypes = Object.keys(NodeDetails).reduce((result, key) => {
    result[key] = CircuitNode
    return result
}, {})

function checkConnection(source, dest) {
    if (source === dest) {
        // all pins can take a data type of the same type
        return true;
    }
    if (source === DataTypes.ANY && dest !== DataTypes.PULSE) {
        // All pins but PULSE can take ANY as an argument
        return true;
    }
    switch (dest) {
        case DataTypes.ANY:
        case DataTypes.BOOLEAN:
            return source !== DataTypes.PULSE;
        case DataTypes.COLOR:
            return source === DataTypes.STRING;
        case DataTypes.STRING:
            return source === DataTypes.COLOR;
        case DataTypes.DIR:
            return source === DataTypes.NUMBER;
        case DataTypes.NUMBER:
            return source === DataTypes.DIR;
        default:
            return false;
    }
}

function load(store, program) {
    try {
        const assembly = loadAssembly(program);
        store.loadAssembly(assembly)
    } catch {
        alert("Unable to parse program");
    }
}

export default function App() {
    const store = useStore(appSelector);
    const {getNodes} = useReactFlow();
    const nodes = getNodes();
    const isValidConnection = useCallback((connection) => {
        const nodeA = nodes.find((node) => node.id === connection.source)
        const nodeB = nodes.find((node) => node.id === connection.target)
        return checkConnection(NodeDetails[nodeA.type].outputs[connection.sourceHandle].dataType,
            NodeDetails[nodeB.type].inputs[connection.targetHandle].dataType)
    }, [nodes]);
    const [textareaValue, setTextareaValue] = useState("");
    const setTextareaValueEvent = useCallback((e) => setTextareaValue(e.target.value), [setTextareaValue])
    const loadProgram = useCallback(() => load(store, textareaValue), [store, textareaValue]);
    const [initialized, simulationRunning] = useSimulation();
    const toggle = useCallback(() => {
        store.setSimulationRunning(!simulationRunning);
    }, [store, simulationRunning]);
    const clearTextarea = useCallback(() => setTextareaValue(""), [setTextareaValue]);

    return (
        <div style={{width: '100vw', height: '100vh'}}>
            <ReactFlow
                nodes={store.nodes}
                edges={store.edges}
                onNodesChange={store.onNodesChange}
                onEdgesChange={store.onEdgesChange}
                onConnect={store.addEdge}
                isValidConnection={isValidConnection}
                nodeTypes={nodeTypes}
                deleteKeyCode={["Delete", "Backspace"]}
                minZoom="0.01"
                maxZoom="5"
            >
                <Panel position="top-right">
                    <Popup modal trigger={<button>Add Component</button>}><ComponentSelector/></Popup>
                    {initialized && <button onClick={toggle}>{simulationRunning ? "Stop layout" : "Start layout"}</button>}
                    <Popup onClose={clearTextarea} trigger={<button>Load</button>} modal>
                        {close => (
                            <div className="load-modal">
                                <h3>Load Program?</h3>
                                <textarea value={textareaValue} onChange={setTextareaValueEvent} />
                                <button onClick={() => {
                                    loadProgram();
                                    close();
                                }}>Confirm</button>
                            </div>
                        )}
                    </Popup>
                    <Popup trigger={<button>Export</button>} modal>
                        <ExportAssembly/>
                    </Popup>
                </Panel>
                <Controls />
                <MiniMap />
                <Background variant="dots" gap={12} size={1} />
            </ReactFlow>
        </div>
    );
}