import Producto from "./Producto.jsx";

export default function Item({producto}){
     let resultado = [];

     resultado = producto.map((elemento) => <Producto id={elemento}></Producto>)
     

     return resultado;

}