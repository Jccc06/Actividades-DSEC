import { useState } from "react";

export default function FormularioUno(){
    const[nombre,setNombre] = useState(" ");
    const[correo,setCorreo] = useState(" ");
    const[userData,setUserData] = useState(" ");

    function RecogerDatos(e){
        e.preventDefault();
        setNombre(nombre);
        setCorreo(correo);
       
        if(correo === " " || nombre === " "){
            setUserData("Usuario invalido o vacio.");
        }
        else{
             setUserData("Nombre: " + nombre + "\nCorreo: " + correo);
        }

    }
    
    
    return(
        <>
            <form onSubmit={RecogerDatos}>
                <p>
                    <label for="nombre">Nombre: </label>
                    <input type="text" id="nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}></input>
                </p>
                <p>
                    <label for="correo">Correo: </label>
                    <input type="email" id="correo" name="correo" value={correo} onChange={(e) => setCorreo(e.target.value)}></input>
                </p>
                <p>
                    <button type="sumbit">Enviar</button>
                </p>
            </form>
            <h2>{userData}</h2>
        </>
    )


}