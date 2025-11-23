import Menu from './Menu.jsx';

function Cabecera({simple,titulo}){
    let resultado;

    if(simple)
        resultado = (
        <>
            <h1>{titulo}</h1>
            <Menu></Menu>
        </>)
        else
            resultado = <h1>Cabecera simple</h1>

        return resultado;
        
}

export default Cabecera;