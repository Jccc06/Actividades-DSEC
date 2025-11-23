export default function Item({nombre}){
    return(
        <>
            <li>
                {nombre} <button>Editar</button><button>Borrar</button>
            </li>
        </>
    );
}