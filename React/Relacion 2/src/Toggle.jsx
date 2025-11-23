import { useState } from "react"

export default function Toggle(){
    const[estado,setEstado] = useState(true);
    const[visible,setVisible] = useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aut dicta officia, at, ea deleniti officiis culpa odio  nam a labore numquam perferendis quisquam consectetur? Quod rerum commodi impedit corporis!")
    function MostrarOcultar(){
            if(!estado){
                setEstado(true)
                setVisible("Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aut dicta officia, at, ea deleniti officiis culpa odio  nam a labore numquam perferendis quisquam consectetur? Quod rerum commodi impedit corporis!")
            }
            else if(estado){
                setEstado(false)
                setVisible("");
            }
        }

    return(
        <>
            <p>{visible}</p>        
            <button onClick={MostrarOcultar}>Mostrar/Ocultar</button>
        </>
    )


}