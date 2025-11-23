import { useState } from "react";

export default function Contador(){
    const[contador , setContador] = useState(0);
    function pulsoBoton(){
        setContador(contador+1);
    }

    return(
        <>
            <h3>Contador = {contador}</h3>
            <button onClick={pulsoBoton}>Pulsame</button>
        </>
    );
}
