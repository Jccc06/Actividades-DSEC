

window.onload = ()=> {
    //1 document.addEventListener("click",(e)=> alert("Hola mundo"));

    //2document.addEventListener("mousemove",(e)=> console.log(e.clientX + " " + e.clientY));
    /*
    let btn = document.getElementById("boton");
    btn.addEventListener("click",limpiar);
    
    limpiar();*/
  
    
    /*
   let tabla = document.getElementById("Mitabla");
   let aux = ""; 
    for(i = 0;i <100;i++){
        aux += "<tr>";
        for(j = 0;j < 100;j++){
            aux += "<td></td>"
        }
        aux += "</tr>";
    }

    tabla.innerHTML = aux;

    let tr = document.getElementById("td");

    for(celda of tr){
        celda.addEventListener("mouseouver",entra);
    }*/

    // 9
  

// Cuando se hace click en la imagen, activa o desactiva el "arrastre"
/*
  let img = document.getElementById("imagen");
    //let img2 = document.getElementById("imagen2");
    //let img3 = document.getElementById("imagen3");
    let clickado = false;
    let difX, difY;

    img.addEventListener("click", (e) => {
        if (!clickado) {
            // es la primera vez que clickan la imagen, tengo que arrastrarla
            clickado = true;
            difX= e.clientX - img.offsetLeft;
            difY= e.clientY - img.offsetTop;
        } else {
            clickado = false;
        }
    });

    document.addEventListener("mousemove", (e) => {
        // obtengo la posición del ratón continuamente
        if (clickado) {
       
            console.log("Han clickado la imagen y su en sus estilos la pos es:", e.clientX, e.clientY);
            img.style.top = (e.clientY-difY) + "px";
            img.style.left = (e.clientX-difX) + "px";
            img.style.position = "absolute"; 
        }
    });*/

    /*
 
    let imagenes = document.getElementById("imagenes");
    let img;
    let clickado = false;

    // Cuando se presiona el botón del ratón sobre la imagen
    let difX, difY;

    imagenes.addEventListener("click", (e) => {
        if (!clickado) {
            // es la primera vez que clickan la imagen, tengo que arrastrarla
            clickado = true;
            img = e.target;
            difX= e.clientX - img.offsetLeft;
            difY= e.clientY - img.offsetTop;
        } else {
            clickado = false;
        }
    });

    document.addEventListener("mousemove", (e) => {
        // obtengo la posición del ratón continuamente
        if (clickado) {
       
            console.log("Han clickado la imagen y su en sus estilos la pos es:", e.clientX, e.clientY);
            img.style.top = (e.clientY-difY) + "px";
            img.style.left = (e.clientX-difX) + "px";
            img.style.position = "absolute"; 
        }
    });*/
    

      let img = document.getElementById("imagen");

    let clickado = false;
    let difX, difY;

    img.addEventListener("click", (e) => {
        if (!clickado) {
            // es la primera vez que clickan la imagen, tengo que arrastrarla
            clickado = true;
            difX= e.clientX - img.offsetLeft;
            difY= e.clientY - img.offsetTop;
        }  
    });

    document.addEventListener("drag", (e) => {
        // obtengo la posición del ratón continuamente
        if (clickado) {
       
            console.log("Han clickado la imagen y su en sus estilos la pos es:", e.clientX, e.clientY);
            img.style.top = (e.clientY-difY) + "px";
            img.style.left = (e.clientX-difX) + "px";
            img.style.position = "absolute"; 
        }
    document.addEventListener("drop",(e)=> {
        clickado = false
    })
    });



 

 
}

/*
function limpiar(){
    let tr,td;
    let tabla = document.getElementById("Mitabla");

    for(let i = 0;i<300;i++){
        tr = document.createElement("tr");
        tr.addEventListener("mouseover",entra);

        for(let j=0;j<300;j++){
            td = document.createElement("td");
            tr.appendChild(td);
        }
        tabla.appendChild(tr);
    }
    
    function entra(e){
        e.target.style.backgroundColor = "red";
        if(e.ctrlKey){
            e.target.style.backgroundColor = "white";
        }
       
    }
}*/