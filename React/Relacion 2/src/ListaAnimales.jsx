import Item from "./Item";

export default function ListaAnimales(){
    let animales = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];
    let todosanimales = [];
    
    todosanimales = animales.map((nombre,index) => <Item key = {index} nombre={nombre}></Item>);

    return(
        <>
            <ul>
                {todosanimales}
            </ul>
        </>
    );
}
