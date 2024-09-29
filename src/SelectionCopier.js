import {useStore} from "./store";
import {useEffect, useState} from "react";

const selector = (store) => ({
    selection: store.selection,
    addCopied: store.addCopied
})

export function SelectionCopier() {
    const {selection, addCopied} = useStore(selector);
    const [copied, setCopied] = useState({nodes: [], edges: []});
    useEffect(() => {
        const keydownHandler = (e) => {
            if (!e.ctrlKey) {
                return;
            }
            if (e.key === "c") {
                const copy = structuredClone(selection)
                setCopied(copy)
            }
            else if (e.key === "v") {
                addCopied(copied.nodes, copied.edges)
            }
        }
        document.addEventListener("keydown", keydownHandler);
        return () => document.removeEventListener("keydown", keydownHandler);
    }, [addCopied, setCopied, selection, copied]);
}