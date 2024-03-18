import { useState } from "react";

export default function Prova(){
    
    const [text,setText]  = useState("");
    const [Mostra,setMostra] = useState(false)

    return (
        <>
            <input type="text" value={text} placeholder="Input" onChange={ev => setText(ev.target.value)}/>
            <button onClick={() => setMostra(true)}>
                Mostra
            </button>
            { Mostra === true && <div> {text}</div> }
        </>
    );
}