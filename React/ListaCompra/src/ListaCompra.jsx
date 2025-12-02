import { useState } from 'react';
import Item from './Item.jsx';
import Pie from './Pie.jsx';

export default function ListaCompra(){
    let datosInicialesPrueba = ["arroz","pan"]



    const [listaCompra,setListaCompra] = useState(datosInicialesPrueba);
    const [contenido,setContenido] = useState("");

    function pulsoBoton(){
        setListaCompra([...listaCompra,contenido]);
        setContenido(listaCompra);
    }

    function actualizarElemento(nuevoContenido,id){
        listaCompra[id] = nuevoContenido;
        setListaCompra([...listaCompra]);
    }

    function eliminarElemento(indice){
        listaCompra.splice(indice, 1); 
        setListaCompra([...listaCompra]); 
    }

    function borrarLista(){
        setListaCompra([]);
    }

    let maqueta = listaCompra.map((item,indice)=> <Item key={indice}
            nombre={item}
            id={indice}
            onNuevoTexto={actualizarElemento}
            onDelete={eliminarElemento}></Item>) 

    return (
        <>
            <input value={contenido} onChange={e => setContenido(e.target.value)}></input>
            <button onClick={pulsoBoton}>Añadir</button>
            {maqueta}
            <Pie onClick={borrarLista}></Pie>
        </>
    )
}