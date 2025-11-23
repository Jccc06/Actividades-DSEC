import "./img/luigi.jpg"

export default function TarjetaInfo({nombre , edad , isOnline , imagenUrl}){
    let resultado;

    let online = (isOnline ? "Si esta online" : "No esta online");


    resultado = (
        <>
        <h2>Nombre: {nombre}</h2>
        <br></br>
        <h2>Edad: {edad}</h2>
        <br></br>
        <h2>Esta online: {online}</h2>
        <br></br>
        <img src={imagenUrl}></img>
        </>
    )

    return resultado;
}