export default function Sesion(){
    //let Titulo = "Mi Cabecera";
    function pulsoBoton(){
        let nombre = document.getElementById("nombre");
        let apellidos = document.getElementById("apellidos");
        let nom = nombre.value + " " + apellidos.value;

        alert("Bienvenido de nuevo " + nom)
        
    }

    return(
        <>
            <input id="nombre" type="text"></input> 
            <br></br>
            <input id="apellidos" type="text"></input> 
            <br></br>
            <button onClick={pulsoBoton}>Iniciar Sesion </button>
        </>
    );
}
