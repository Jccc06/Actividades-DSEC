


window.onload = () => {
    juegoColor();
  
   

}

function generarColor(){
    let numaleat = Math.floor(Math.random() * 3);
    let arrayC  = ["rojo","azul","verde","amarillo"];
    let pregunta = document.getElementById("pregunta");
   
    pregunta.innerHTML = "Pulsa el color: " + arrayC[numaleat];

    return arrayC[numaleat];
}


function juegoColor(){
    let colores = document.getElementById("juego1");
    let evento,color;
    let resultado = document.getElementById("resultado");
   
    let coloraleat = generarColor();
    colores.addEventListener("click",(e) => {
        evento = e.target;
        color = evento.id;
            if(coloraleat === color){
                resultado.innerHTML = "HAS GANADO!";
                coloraleat = generarColor();
            }
            else{
                resultado.innerHTML = "HAS PERDIDO DALTONICO."
            }
    });



}

