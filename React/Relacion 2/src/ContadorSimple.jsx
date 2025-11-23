import { useState } from "react";

export default function ContadorSimple(){
    const [contador,setContador] = useState(0);

    function PulsaBotonSuma(){
        setContador(contador+1);
    }

    function PulsaBotonResta(){
        setContador(contador-1);
    }

    function PulsaBotonReset(){
        setContador(contador*0);    
    }
    return(
        <>
        
        <button onClick={PulsaBotonSuma}>Sumar</button>
        <button onClick={PulsaBotonResta}>Restar</button>
         <button onClick={PulsaBotonReset}>Resetear</button>
        <h1> {contador}</h1>
        
        </>
    )
}