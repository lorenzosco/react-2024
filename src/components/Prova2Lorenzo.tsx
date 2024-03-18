import { useState } from "react";

export default function () {
    const [text, setText] = useState("")
    const [Mostra, setMostra] = useState(false)

    return <>
        <input type="text" value={text} onChange = {(ev) => setText(ev.target.value)} />
        <button onClick = {() => setMostra(true)}>
            Mostra
        </button>
        {Mostra === true && <div>{text}</div>}
        </>
}