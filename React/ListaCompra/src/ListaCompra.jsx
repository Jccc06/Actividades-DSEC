import { useState } from 'react';
import Item from './Item.jsx';
import Pie from './Pie.jsx';

export default function ListaCompra(){
    let datosInicialesPrueba = {
        
        "items":[

        {
            "nombre":"arroz",
            "cantidad":"3"
        },
        {
            "nombre":"pan",
            "cantidad":"2"
        }

        ]
    }



    const [listaCompra,setListaCompra] = useState(datosInicialesPrueba.items);
    const [contenido,setContenido] = useState("");

    function pulsoBoton(){
        setListaCompra([...listaCompra,contenido]);
        setContenido(listaCompra);
    }

    function actualizarElemento(nuevoContenido,id){
        listaCompra[id].nombre = nuevoContenido;
        setListaCompra([...listaCompra]);
    }

    function eliminarElemento(indice){
        const nuevoArray = [...listaCompra] 
        elemento = listaCompra.splice(indice,1);
    }

    function borrarLista(){
        setListaCompra([]);
    }

    let maqueta = listaCompra.map((item,indice)=> <Item key={indice}
            nombre={item.nombre}
            cantidad={item.cantidad}
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