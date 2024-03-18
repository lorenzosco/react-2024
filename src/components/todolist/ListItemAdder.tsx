import { useState } from "react";

export function ListItemAdder(props: {
    readonly onSave: (text: string) => void;
}) {
    const { onSave } = props;
    const [text, setText] = useState("");

    return <>

        <input value={text} placeholder="large size" onChange={ev => setText(ev.target.value)} />
        <button type="button" onClick={() => {
            onSave(text);
            setText("");
        }}>Aggiungi</button>
    </>
}