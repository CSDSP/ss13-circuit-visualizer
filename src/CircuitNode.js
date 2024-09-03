import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Handle, Position, useReactFlow} from '@xyflow/react';

import { useStore } from './store';
import {DataTypes, NodeDetails} from "./NodeDetails";
import Popup from "reactjs-popup";
import {nanoid} from "nanoid";
import {DragDropContext, Draggable, Droppable} from "@hello-pangea/dnd";

const nameSelector = (id) => (store) => ({
    setNameEvent: (e) => store.updateNode(id, {name: e.target.value})
})

const fixedSelector = (id) => (store) => ({
    setFixed: (fixed) => store.updateNode(id, {isFixed: fixed}),
    simulationRunning: store.simulationRunning,
    updateNode: (v) => store.updateNode(id, v)
})

const allDataTypeOptions = []
const allowedConstantChipTypes = [DataTypes.STRING, DataTypes.NUMBER, DataTypes.DIR, DataTypes.BOOLEAN, DataTypes.COLOR, DataTypes.NULL]
const constantChipTypeOptions = []
for (let type in DataTypes) {
    if (DataTypes[type] !== DataTypes.ANY && DataTypes[type] !== DataTypes.PULSE) {
        allDataTypeOptions.push(<option key={DataTypes[type]} value={DataTypes[type]}>{DataTypes[type]}</option>)
        if (allowedConstantChipTypes.indexOf(DataTypes[type]) !== -1) {
            constantChipTypeOptions.push(<option key={DataTypes[type]} value={DataTypes[type]}>{DataTypes[type]}</option>)
        }
    }
}

function InputWrapper({value, type, setValue, containedAnyType, setContainedAnyType, allowedAnyTypes}) {
    let valueView = value
    let containedAnyTypeView = containedAnyType
    if (value == null && type !== DataTypes.NULL && !(type === DataTypes.ANY && containedAnyType == null)) {
        valueView = ""
    }
    if (type === DataTypes.ANY && containedAnyType == null) {
        containedAnyTypeView = DataTypes.NULL
    }
    const setDataTypeEvent = useCallback((e) => setContainedAnyType(e.target.value), [setContainedAnyType]);
    const setDataEvent = useCallback((e) => setValue(e.target.value), [setValue]);

    switch (type) {
        case DataTypes.ANY:
            return <span>
                <select value={containedAnyTypeView} className="nodrag" onChange={setDataTypeEvent}>
                    {allowedAnyTypes}
                </select>
                <InputWrapper type={containedAnyTypeView} value={valueView} setValue={setValue}/>
            </span>
        case DataTypes.STRING:
            return <input className="nodrag" type="string" value={valueView} onChange={setDataEvent} />
        case DataTypes.COLOR:
            return <input className="nodrag" type="color" value={valueView} onChange={setDataEvent} />
        case DataTypes.NUMBER:
            return <input className="nodrag" type="number" value={valueView} onChange={setDataEvent} />
        case DataTypes.DIR:
            return <select value={valueView} className="nodrag" onChange={setDataEvent}>
                <option value="1">north (1)</option>
                <option value="2">south (2)</option>
                <option value="4">east (4)</option>
                <option value="8">west (8)</option>
                <option value="5">northeast (5)</option>
                <option value="9">northwest (9)</option>
                <option value="6">southeast (6)</option>
                <option value="10">southwest (10)</option>
            </select>
        case DataTypes.BOOLEAN:
            return <input className="nodrag" type="checkbox" value={valueView} onChange={setDataEvent} />
        case DataTypes.REF:
            return <p>(REF)</p>
        case DataTypes.LIST:
            return <Popup modal trigger={<p className="nodrag hoverable-button create-list-button">(LIST)</p>}>
                <NodeListEditor value={valueView} setValue={setValue}/>
            </Popup>
        default:
            return null
    }
}

function NodeListEditor({value, setValue}) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const containedValues = value == null || value.list == null ? [] : value.list
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const containedTypes = value == null || value.types == null ? [] : value.types
    const [lineIDs, setLineIds] = useState(Array.from({length: containedTypes.length}, () => nanoid()))
    const [defaultType, setDefaultType] = useState(DataTypes.STRING)
    const [defaultValue, setDefaultValue] = useState("")
    if (lineIDs.length !== containedValues.length) {
        while (lineIDs.length !== containedValues.length) {
            lineIDs.push(nanoid())
        }
        setLineIds(lineIDs)
    }
    const setFunctions = useMemo(() => {
        const result = []
        for (let i = 0; i < containedValues.length; i++) {
            result.push([
                (value) => {
                    containedValues[i] = value;
                    setValue({list: containedValues, types: containedTypes});
                },
                (type) => {
                    containedTypes[i] = type;
                    if (type === DataTypes.NULL) {
                        containedValues[i] = null;
                    }
                    setValue({list: containedValues, types: containedTypes});
                },
                () => {
                    containedValues.splice(i, 1);
                    containedTypes.splice(i,1);
                    lineIDs.splice(i, 1)
                    setValue({list: containedValues, types: containedTypes});
                    setLineIds(lineIDs);
                }
            ])
        }
        return result
    }, [containedValues, setValue, containedTypes, lineIDs]);
    const addRow = useCallback(() => {
        containedValues.push(defaultValue);
        containedTypes.push(defaultType);
        setValue({list: containedValues, types: containedTypes});
    }, [containedValues, containedTypes, setValue, defaultType, defaultValue]);
    for (let i = 0; i < containedValues.length; i++) {
        if (containedValues[i] == null && containedTypes[i] !== DataTypes.NULL) {
            containedValues[i] = "";
            // note: this does not change the parent's state (unless it gets set later), since there's no need to re-render
        }
    }
    const onDragEnd = useCallback((result) => {
        if (!result.destination) return
        const a = result.destination.index;
        const b = result.source.index;
        [containedValues[a], containedValues[b]] = [containedValues[b], containedValues[a]];
        [containedTypes[a], containedTypes[b]] = [containedTypes[b], containedTypes[a]];
        [lineIDs[a], lineIDs[b]] = [lineIDs[b], lineIDs[a]];
        setValue({list: containedValues, types: containedTypes});
        setLineIds(lineIDs);
    }, [containedTypes, containedValues, lineIDs, setValue])
    return <dir className="list-editor">
        <div>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable" >
                    {(provided, snapshot) => (
                        <div className="list-editor-items" {...provided.droppableProps} ref={provided.innerRef}>
                            {lineIDs.map((key, i) => (
                                <Draggable key={key} draggableId={key} index={i}>
                                    {(provided, snapshot) => (
                                        <div className="list-editor-row" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                            <label>
                                                {i}:
                                                <InputWrapper value={containedValues[i]} type={DataTypes.ANY} setValue={setFunctions[i][0]}
                                                              containedAnyType={containedTypes[i]} setContainedAnyType={setFunctions[i][1]}
                                                              allowedAnyTypes={constantChipTypeOptions}/>
                                                <span onClick={setFunctions[i][2]}
                                                      className="material-symbols-outlined node-action-button hoverable-button">remove</span>
                                            </label>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
        <dir className="list-editor-add">
            <span onClick={addRow}
                  className="material-symbols-outlined node-action-button hoverable-button">add_circle</span>
            <InputWrapper value={defaultValue} type={DataTypes.ANY} setValue={setDefaultValue}
                          containedAnyType={defaultType}
                          setContainedAnyType={setDefaultType} allowedAnyTypes={constantChipTypeOptions}/>
        </dir>
    </dir>
}

function NodeName({id, data}) {
    const {setNameEvent} = useStore(nameSelector(id))
    const [editingName, setEditingName] = useState(false)
    const startEditing = useCallback(() => setEditingName(true), [setEditingName])
    const stopEditing = useCallback(() => setEditingName(false), [setEditingName])
    const inputReference = useRef(null)
    useEffect(() => {
        if (inputReference.current != null) {
            inputReference.current.focus()
        }
    })
    if (editingName) {
        return <input className="nodrag node-name" type="string" value={data.name} onChange={setNameEvent}
                      onBlur={stopEditing} ref={inputReference}/>
    } else {
        return <p className="node-name" onDoubleClick={startEditing}>{data.name}</p>
    }
}

export function CircuitNode({id, data, type}) {
    const { setFixed, simulationRunning, updateNode } = useStore(fixedSelector(id))
    const {inputs, outputs} = NodeDetails[type]
    const inputHandles = []
    const outputHandles = []
    const reactFlow = useReactFlow()
    const node = reactFlow.getNode(id)
    const positionRef = useRef(node.position)
    useEffect(() => {
        if (!simulationRunning) return;
        if (node.dragging && !node.data.isFixed) {
            setFixed(true);
        } else if (!node.dragging && node.data.isFixed &&
            (positionRef.current.x !== node.position.x || positionRef.current.y !== node.position.y)) {
            // reload in case of changed position
            setFixed(true);
            positionRef.current = node.position
        }
    }, [node, setFixed, simulationRunning])
    const toggleFixed = useCallback(() => {
        setFixed(!node.data.isFixed);
    }, [setFixed, node]);
    const inputFunctions = useMemo(() => {
        const result = {}
        for (const key in inputs) {
            result[key] = [
                (value) => updateNode({[key]: value}),
                (type) => updateNode({[`${key}-type`]: type})]
        }
        if (type === "constant chip") {
            result["output pin"] = [
                (value) => updateNode({"output pin": value}),
                (type) => updateNode({"output pin-type": type})]
        }
        return result
    }, [updateNode, inputs, type])
    for (const key in inputs) {
        inputHandles.push(
            <div key={key} className="handle-group handle-group-left">
                <Handle type={"target"} position={Position.Left} id={key} className={`handle-type-${inputs[key].dataType}`}/>
                <label>
                    <p className="handle-name">{key}</p>
                    <InputWrapper id={id} value={data[key]} type={inputs[key].dataType} setValue={inputFunctions[key][0]}
                                  containedAnyType={data[`${key}-type`]} setContainedAnyType={inputFunctions[key][1]}
                                  allowedAnyTypes={allDataTypeOptions}/>
                </label>
            </div>
        );
    }
    for (const key in outputs) {
        outputHandles.push(
            <div key={key} className="handle-group handle-group-right">
                {/*only constant chips will load output*/}
                {type === "constant chip" ?
                    <label>
                        <p className="handle-name">{key}</p>
                        <InputWrapper value={data[key]} type={DataTypes.ANY} setValue={inputFunctions[key][0]}
                                      containedAnyType={data[`${key}-type`]} setContainedAnyType={inputFunctions[key][1]}
                                      allowedAnyTypes={allDataTypeOptions}/>
                    </label>
                    : <div className="handle-name">{key}</div>}
                <Handle type={"source"} position={Position.Right} id={key} className={`handle-type-${outputs[key].dataType}`}/>
            </div>
        )
    }
    return (
        <div className="circuit-node">
            <div className="handles-container">
                {inputHandles}
            </div>
            <div className="node-center">
                <NodeName id={id} data={data}/>
                <div className="node-action-buttons">
                    <Popup trigger={<span className="nodrag material-symbols-outlined node-action-button hoverable-button">info</span>} position="top right"
                           on={['hover', 'focus']}>
                        <div className="node-details">
                            <h3>{data.name === type ? type : `${data.name} (${type})`}</h3>
                            <p>{NodeDetails[type].desc}</p>
                            <p>Size: {NodeDetails[type].size}<br/>Complexity: {NodeDetails[type].complexity}</p>
                        </div>
                    </Popup>
                    <span onClick={toggleFixed} className="nodrag material-symbols-outlined node-action-button hoverable-button">{node.data.isFixed === true ? "lock" : "lock_open_right"}</span>
                </div>
            </div>
            <div className="handles-container">
                {outputHandles}
            </div>
        </div>
    )
}