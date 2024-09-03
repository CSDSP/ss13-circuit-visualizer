import {NodeDetails} from "./NodeDetails";
import React, {useMemo, useState} from "react";
import {useStore} from "./store";

const selector = (store) => ({
    addNode: store.addNode
})
export function ComponentSelector() {
    const { addNode } = useStore(selector);
    const [ selected, setSelected ] = useState("")
    const selectFuncs = useMemo(() => {
        return category_names.map((item) => () => {
            if (selected === item) {
                setSelected("");
            } else {
                setSelected(item);
            }
        })
    }, [selected, setSelected])
    const addFuncs = useMemo(() => {
        const result = {}
        for (const type in NodeDetails) {
            result[type] = () => {addNode(type)};
        }
        return result;
    }, [addNode]);
    const availableComponents = categories[selected] == null ? [] : categories[selected];
    return <div className="component-selector">
        <div className="component-selector-tabs">
            {category_names.map((item, i) => <div className={"component-selector-tab" + ((item === selected) ? " selected" : "")} key={item} onClick={selectFuncs[i]}>{item}</div>)}
        </div>
        <div className="component-selector-items">
            {availableComponents.map(item => <div className="component-selector-item" key={item} onClick={addFuncs[item]}>
                {item}
            </div>)}
        </div>
    </div>
}

let categories = {}
for (const key in NodeDetails) {
    const category = NodeDetails[key].category
    if (categories[category] == null) {
        categories[category] = []
    }
    categories[category].push(key)
}
const category_names = Object.keys(categories).sort()
for (const key of category_names) {
    categories[key].sort()
}