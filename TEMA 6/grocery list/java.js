window.onload = () => {
    var lista = document.getElementById("lista");
    // var opciones = document.getElementsByTagName("li");
    var li = [];
    var mibtn = document.getElementById("miBtn");
    let nuevoLi = document.createElement("li");
    let nuevoBotonBorrar = document.createElement("button");
    let nuevoBotonEditar = document.createElement("button");
    let contenido;

    mibtn.addEventListener("click",()=>{
        let contenidoInput = document.getElementById("input").value;
        nuevoLi = document.createElement("li");
        nuevoBotonBorrar = document.createElement("button");
        nuevoBotonEditar = document.createElement("button");
        nuevoLi.innerHTML = contenidoInput;
        nuevoBotonBorrar.textContent = "Borrar";
        nuevoBotonEditar.textContent = "Editar";
        lista.appendChild(nuevoLi);
        nuevoLi.appendChild(nuevoBotonEditar);
        nuevoLi.appendChild(nuevoBotonBorrar);
       // li.push(lista.appendChild(nuevoLi));
        document.getElementById("input").value = "";

        nuevoBotonEditar.addEventListener("click",(e) => {   
            contenido = prompt("Dime el nuevo contenido");
            e.target.parentNode.textContent = contenido;
            nuevoLi.appendChild(nuevoBotonEditar);
            nuevoLi.appendChild(nuevoBotonBorrar);
        })


        nuevoBotonBorrar.addEventListener("click", (e) => {
        if(confirm("¿Seguro que deseas borrar la entrada "+e.target.innerHTML+"?")){
                    lista.removeChild(e.target.parentNode);    
                }
        })

    })  

  

    var mibtnBorrar = document.getElementById("mibtnBorrar");
    mibtnBorrar.addEventListener("click", (e)=>{

        if(confirm("¿Seguro que deseas borrar la entrada "+e.target.innerHTML+"?")){
            lista.innerHTML = " ";
            
        }
    })
}