import Item from "./Item";

export default function ListaCompra(){
    let listaCompra = ["huevos","queso","pan","patatas"];
    let secuenciaItems = [];

    secuenciaItems = listaCompra.map((nombre,index) => <Item key = {index} nombre={nombre}></Item>);

    return(
        <>
            <ul>
                {secuenciaItems}
            </ul>
        </>
    );
}

