import { useState } from "react"

export default function ComponenteControlado(){
    const[texto,setTexto] = useState("");
    function Limpiar(){
        setTexto("");
    }
    return(
        <>
            <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)}></input>
            <p>{texto}</p>
            <button onClick={Limpiar}>Limpiar</button>
        </>
    )


}