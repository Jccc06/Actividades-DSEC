export default function Boton(){
    function click1(){
         alert("has clickado el 1");
    }

    function click2(){
        alert("has clickado el 2");
    }

    function click3(){
        alert("has clickado el 3");
    }

    return(
        <>
        <button onClick={click1}>boton 1</button>
        <button onClick={click2}>boton 2</button>
        <button onClick={click3}>boton 3</button>
        </>
    )
}