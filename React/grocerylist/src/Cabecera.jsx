import { useState } from "react";

export default function Cabecera(){
    //let Titulo = "Mi Cabecera";
    const[Titulo , setTitulo] = useState("Mi cabecera state");
    const[contador , setContador] = useState(0);
    function pulsoBoton(){
        console.log("pulsado");
        setTitulo("Cambia titulo");
        setContador(contador+1);
    }

    return(
        <>
            <h2>{Titulo}</h2>
            <h3>Contador = {contador}</h3>
            <input type="text"></input> 
            <button onClick={pulsoBoton}>Añadir</button>
        </>
    );
}
