import { useState } from "react";
import BotonIncrementar from "./BotonIncrementar";

export default function BotonRe(){
    const[contador,setContador] = useState(0);

    function Incrementar(){
        console.log("Click");
        setContador(contador+1);
    }

    return(
        <>
            <h1>Contador: {contador}</h1>
            <BotonIncrementar incrementar={Incrementar}></BotonIncrementar>
        </>
    )
}