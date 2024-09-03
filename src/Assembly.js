import {DataTypes, NodeDetails} from "./NodeDetails";
import {nanoid} from "nanoid";
import {useStore} from "./store";
import React, {useCallback} from "react";
import Popup from "reactjs-popup";

const assemblySelector = (store) => ({
    nodes: store.nodes,
    edges: store.edges,
    assemblyInfo: store.assemblyInfo,
    setAssemblyType: (e) => store.updateAssembly({type: e.target.value}),
    setAssemblyName: (e) => store.updateAssembly({name: e.target.value}),
    setAssemblyDescription: (e) => store.updateAssembly({desc: e.target.value}),
    setAssemblyColor: (e) => store.updateAssembly({detail_color: e.target.value}),
})

function guessType(value) {
    if (value == null) {
        return DataTypes.NULL;
    }
    else if (!isNaN(value) && !isNaN(parseFloat(value))) {
        return DataTypes.NUMBER;
    } else if (value.constructor === Array) {
        return DataTypes.LIST;
    } else {
        return DataTypes.STRING;
    }
}

function getHandle(wire, components) {
    const result = {}
    const componentNumber = wire[0] - 1; // convert from 1-indexed to 0-indexed
    result.id = components[componentNumber].id
    const pinType = wire[1];
    const pinNumber = wire[2] - 1;
    const details = NodeDetails[components[componentNumber].type];
    let list = null;
    let isInput = false
    switch (pinType) {
        case "I":
            list = details.inputs;
            isInput = true
            break;
        case "O":
            list = details.outputs;
            isInput = false
            break;
        case "A":
            list = details.inputs
            const inputHandle = Object.keys(list).find(key => list[key].dataType === DataTypes.PULSE && list[key].index === pinNumber)
            if (inputHandle != null) {
                result.handle = inputHandle
                isInput = true
            } else {
                list = details.outputs
                result.handle = Object.keys(list).find(key => list[key].dataType === DataTypes.PULSE && list[key].index === pinNumber)
                isInput = false
            }
            return [result, isInput]
        default:
            throw new Error(`Unknown pinType type: ${pinType}`);
    }
    result.handle = Object.keys(list).find(key => list[key].index === pinNumber);
    return [result, isInput];
}

function getWire(type, handle, index) {
    const wire = Array(3);
    const details = NodeDetails[type];
    let pinType = "A";
    if (details.inputs[handle] != null && details.inputs[handle].dataType !== DataTypes.PULSE) {
        pinType = "I";
    } else if (details.outputs[handle] != null && details.outputs[handle].dataType !== DataTypes.PULSE) {
        pinType = "O"
    }
    wire[0] = index + 1
    wire[1] = pinType
    if (details.inputs[handle] != null) {
        wire[2] = details.inputs[handle].index + 1
    } else {
        wire[2] = details.outputs[handle].index + 1
    }
    return wire
}

export function loadAssembly(program) {
    const blocks = JSON.parse(program);
    const result = {};
    result.assembly = blocks.assembly;
    result.components = [];
    for (let component of blocks.components) {
        const newComponent = {type: component.type, id: nanoid(), data: {}, position: {x: 0, y: 0}};
        if (component.position != null) {
            newComponent.position = component.position
        }
        if (component.isFixed !== null) {
            newComponent.data.isFixed = component.isFixed
        }
        const details = NodeDetails[newComponent.type];
        if (component.name != null) {
            newComponent.data.name = component.name;
        } else {
            newComponent.data.name = component.type;
        }
        if (component.inputs != null) {
            for (let input of component.inputs) {
                const index = Number(input[0]) - 1;
                const value = input[2];
                const inputName = Object.keys(details.inputs)
                    .find((key) => details.inputs[key].index === index && details.inputs[key].dataType !== DataTypes.PULSE);
                let type = details.inputs[inputName].dataType
                if (type === DataTypes.ANY) {
                    if (component[`${inputName}-type`] == null) {
                        type = guessType(value);
                    } else {
                        type = component[`${inputName}-type`]
                    }
                    newComponent.data[`${inputName}-type`] = type
                }
                if (type === DataTypes.LIST) {
                    const list = value
                    const types = component[`${inputName}-list-types`] == null
                        ? list.map(value => guessType(value))
                        : component[`${inputName}-list-types`];
                    newComponent.data[inputName] = {list: list, types: types}
                } else {
                    newComponent.data[inputName] = value;
                }
            }
        }
        if (component.special != null) {
            // only used for constant memory chip, special case
            newComponent.data["output pin"] = component.special;
            if (component[`output pin-type`] == null) {
                newComponent.data[`output pin-type`] = guessType(component.special);
            } else {
                newComponent.data[`output pin-type`] = component[`output pin-type`]
            }
        }
        result.components.push(newComponent)
    }
    result.edges = []
    if (blocks.wires != null) {
        for (let wire of blocks.wires) {
            const [from, fromInput] = getHandle(wire[0], result.components);
            const [to, toInput] = getHandle(wire[1], result.components);
            if (!fromInput && toInput) {
                result.edges.push({id: nanoid(), source: from.id, target: to.id, sourceHandle: from.handle, targetHandle: to.handle})
            } else if (fromInput && !toInput) {
                result.edges.push({id: nanoid(), source: to.id, target: from.id, sourceHandle: to.handle, targetHandle: from.handle})
            }
        }
    }
    return result;
}

function saveAssembly(assembly) {
    const blocks = {}
    blocks.assembly = assembly.assembly
    const indexes = {}
    blocks.components = []
    for (let component of assembly.components) {
        const newComponent = {type: component.type, name: component.data.name, position: component.position,
            isFixed: component.data.isFixed}
        const details = NodeDetails[component.type];
        const inputs = []
        for (let key in details.inputs) {
            let type = details.inputs[key].dataType
            if (type === DataTypes.ANY) {
                type = component.data[`${key}-type`]
                newComponent[`${key}-type`] = type
            }
            if (type === DataTypes.LIST) {
                for (let i = 0; i < component.data[key].list.length; i++) {
                    const type = component.data[key].types[i]
                    if (type === DataTypes.NUMBER || type === DataTypes.DIR) {
                        component.data[key].list[i] = Number(component.data[key].list[i])
                    }
                }
                inputs.push([details.inputs[key].index + 1, null, component.data[key].list]);
                newComponent[`${key}-list-types`] = component.data[key].types
            }
            else if (type === DataTypes.NUMBER || type === DataTypes.DIR) {
                inputs.push([details.inputs[key].index + 1, null, Number(component.data[key])]);
            } else if (type !== DataTypes.PULSE && type !== DataTypes.REF && type !== DataTypes.NULL) {
                inputs.push([details.inputs[key].index + 1, null, component.data[key]]);
            }
        }
        if (inputs.length !== 0) {
            newComponent.inputs = inputs
        }
        if (component.type === "constant chip") {
            let type = component.data["output pin-type"]
            if (type !== DataTypes.NULL) {
                let value = component.data["output pin"]
                if (type === DataTypes.NUMBER || type === DataTypes.DIR) {
                    value = Number(value)
                }
                newComponent.special = value
                newComponent["output pin-type"] = type
            }
        }
        indexes[component.id] = blocks.components.length
        blocks.components.push(newComponent)
    }
    blocks.wires = []
    for (let edge of assembly.edges) {
        const sourceIndex = indexes[edge.source]
        const targetIndex = indexes[edge.target]
        blocks.wires.push([getWire(assembly.components[sourceIndex].type, edge.sourceHandle, sourceIndex),
            getWire(assembly.components[targetIndex].type, edge.targetHandle, targetIndex)])
    }
    return JSON.stringify(blocks)
}

export function ExportAssembly() {
    const {nodes, edges, assemblyInfo, setAssemblyType, setAssemblyName, setAssemblyColor, setAssemblyDescription} = useStore(assemblySelector)
    const space = nodes.map(node => NodeDetails[node.type].size == null ? 1 : NodeDetails[node.type].size).reduce((a, b) => a + b, 0)
    const complexity = nodes.map(node => NodeDetails[node.type].complexity).reduce((a, b) => a + b, 0)
    const assemblies = {
        "type-a electronic device": {
            description: "It's a case, for building tiny-sized electronics with.",
            space: 12,
            complexity: 37
        },
        "type-b electronic device": {
            description: "It's a case, for building tiny-sized electronics with. This one has a cylindrical design.",
            space: 12,
            complexity: 37
        },
        "type-c electronic device": {
            description: "It's a case, for building tiny-sized electronics with. This one has a scanner-like design.",
            space: 12,
            complexity: 37
        },
        "type-d electronic device": {
            description: "It's a case, for building tiny-sized electronics with. This one looks like it has a belt clip, but it's purely decorative.",
            space: 12,
            complexity: 37
        },
        "type-e electronic device": {
            description: "It's a case, for building tiny-sized electronics with. This one has a boxy design.",
            space: 12,
            complexity: 37
        },
        "type-f electronic device": {
            description: "It's a case, for building tiny-sized electronics with. This one has a phallic design.",
            space: 12,
            complexity: 37
        },
        "type-a electronic assembly": {
            description: "It's a case, for building small electronics with.",
            space: 25,
            complexity: 75
        },
        "type-b electronic assembly": {
            description: "It's a case, for building small electronics with. This one resembles a pocket calculator.",
            space: 25,
            complexity: 75
        },
        "type-c electronic assembly": {
            description: "It's a case, for building small electronics with. This one has a clamshell design.",
            space: 25,
            complexity: 75
        },
        "type-d electronic assembly": {
            description: "It's a case, for building small electronics with. This one has a simple design.",
            space: 25,
            complexity: 75
        },
        "type-e electronic assembly": {
            description: "It's a case, for building small electronics with. This one looks like it has a belt clip, but it's purely decorative.",
            space: 25,
            complexity: 75
        },
        "type-f electronic assembly": {
            description: "It's a case, for building small electronics with. This one has resembles a PDA.",
            space: 25,
            complexity: 75
        },
        "type-g electronic assembly": {
            description: "It's a case, for building small electronics with. This one has a phallic design.",
            space: 25,
            complexity: 75
        },
        "type-a electronic mechanism": {
            description: "It's a case, for building medium-sized electronics with.",
            space: 50,
            complexity: 150
        },
        "type-b electronic mechanism": {
            description: "It's a case, for building medium-sized electronics with. This one has a boxy design.",
            space: 50,
            complexity: 150
        },
        "type-c electronic mechanism": {
            description: "It's a case, for building medium-sized electronics with. This one has a clamshell design.",
            space: 50,
            complexity: 150
        },
        "type-d electronic mechanism": {
            description: "It's a case, for building medium-sized electronics with. This one resembles some sort of medical apparatus.",
            space: 50,
            complexity: 150
        },
        "type-e electronic mechanism": {
            description: "It's a case, for building medium-sized electronics with. This one resembles a gun, or some type of tool, if you're feeling optimistic. It can fire guns and throw items while the user is holding it.",
            space: 50,
            complexity: 150
        },
        "type-f electronic mechanism": {
            description: "It's a case, for building medium-sized electronics with. This one resembles an old radio.",
            space: 50,
            complexity: 150
        },
        "type-g electronic mechanism": {
            description: "It's a case, for building medium-sized electronics with. This one has a phallic design.",
            space: 50,
            complexity: 150
        },
        "type-a electronic machine": {
            description: "It's a case, for building large electronics with.",
            space: 100,
            complexity: 300
        },
        "type-b electronic machine": {
            description: "It's a case, for building large electronics with. This one resembles an oscilloscope.",
            space: 100,
            complexity: 300
        },
        "type-c electronic machine": {
            description: "It's a case, for building large electronics with. This one resembles a computer terminal.",
            space: 100,
            complexity: 300
        },
        "type-d electronic machine": {
            description: "It's a case, for building large electronics with. This one resembles a robotic arm.",
            space: 100,
            complexity: 300
        },
        "type-e electronic machine": {
            description: "It's a case, for building large electronics with. This one has a tall design.",
            space: 100,
            complexity: 300
        },
        "type-f electronic machine": {
            description: "It's a case, for building large electronics with. This one resembles some kind of industrial machinery.",
            space: 100,
            complexity: 300
        },
        "type-a electronic drone": {
            description: "It's a case, for building mobile electronics with.",
            space: 75,
            complexity: 225
        },
        "type-b electronic drone": {
            description: "It's a case, for building mobile electronics with. This one is armed and dangerous.",
            space: 75,
            complexity: 225
        },
        "type-c electronic drone": {
            description: "It's a case, for building mobile electronics with. This one resembles a Securitron.",
            space: 75,
            complexity: 225
        },
        "type-d electronic drone": {
            description: "It's a case, for building mobile electronics with. This one resembles a Medibot.",
            space: 75,
            complexity: 225
        },
        "type-e electronic drone": {
            description: "It's a case, for building mobile electronics with. This one has a generic bot design.",
            space: 75,
            complexity: 225
        },
        "type-f electronic drone": {
            description: "It's a case, for building mobile electronics with. This one has a hominoid design.",
            space: 75,
            complexity: 225
        },
        "wall-mounted electronic assembly": {
            description: "It's a case, for building medium-sized electronics with. It has a magnetized backing to allow it to stick to walls, but you'll still need to wrench the anchoring bolts in place to keep it on.",
            space: 50,
            complexity: 150
        },
        "heavy wall-mounted electronic assembly": {
            description: "It's a case, for building large electronics with. It has a magnetized backing to allow it to stick to walls, but you'll still need to wrench the anchoring bolts in place to keep it on.",
            space: 100,
            complexity: 300
        },
        "tiny wall-mounted electronic assembly": {
            description: "It's a case, for building tiny electronics with. It has a magnetized backing to allow it to stick to walls, but you'll still need to wrench the anchoring bolts in place to keep it on.",
            space: 12,
            complexity: 37
        }
    }
    const options = []
    for (let key in assemblies) {
        if (assemblies[key].space >= space && assemblies[key].complexity >= complexity) {
            options.push(<option key={key} value={key}>{key}</option>)
        }
    }
    const assembly = {assembly: assemblyInfo, components: nodes, edges: edges};
    const exported = saveAssembly(assembly);
    const copy = useCallback(() => {
        navigator.clipboard.writeText(exported);
    }, [exported]);

    return <div className="export-assembly">
        <h3>Export Program</h3>
        <div className="export-content">
            <div className="export-left">
                <p>Space: {space}</p><br/>
                <p>Complexity: {complexity}</p><br/>
                <label>
                    <p>Assembly type: </p>
                    <Popup trigger={<select value={assemblyInfo.type} onChange={setAssemblyType}>
                        {options}
                    </select>} on={["hover", "focus"]}>{assemblies[assemblyInfo.type].description}</Popup>
                </label><br/>
                <label>
                    <p>Assembly name: </p>
                    <input type="string" value={assemblyInfo.name} onChange={setAssemblyName}/>
                </label><br/>
                <label>
                    <p>Assembly description: </p>
                    <input type="string" value={assemblyInfo.desc} onChange={setAssemblyDescription}/>
                </label><br/>
                <label>
                    <p>Assembly color: </p>
                    <input type="color" value={assemblyInfo.detail_color} onChange={setAssemblyColor}/>
                </label>
            </div>
            <div className="export-right">
                <button onClick={copy}>Copy</button><br/>
                {exported}
            </div>
        </div>
    </div>
}