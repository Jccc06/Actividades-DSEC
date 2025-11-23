import Item from "./Item.jsx";


export default function ListaProductos({id,nombre,precio}){
    let resultado = [id,nombre,precio];

    <>
        <Item prodcutos={resultado}></Item>
    </>
}