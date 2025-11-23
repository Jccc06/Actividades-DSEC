window.onload = () => {
    let texto = document.getElementById("text");
    let numaleat = Math.floor(Math.random() * 9);
    texto.innerHTML = "Pulsa el numero: " + numaleat;
    let numboton = numaleat.toString();
    let boton = document.getElementById(numboton);
    if(numaleat == 0){
        numaleat = Math.floor(Math.random() * 9);
    }

    
    boton.addEventListener("click",() => {
        texto.innerHTML = "Has ganado, has pulsado el boton: " + numaleat;
    });

    




}