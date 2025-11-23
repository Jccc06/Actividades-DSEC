import './ColorCaja/style.css'
import { useState } from 'react'


export default function ColorCaja(){
    const[color,setColor] = useState("grey");
    const[texto,setTexto] = useState("");

    function cambiarColor(){
        setColor(texto);
    }


    return(
        <>
            <h1>Cambia el color de la caja</h1>
            <div id='color' style={{backgroundColor: color}}></div>
            <input type='text' value={texto} onChange={(e) => setTexto(e.target.value)}></input>
            <button onClick={cambiarColor}>Cambiar color</button>
        </>
    )
}