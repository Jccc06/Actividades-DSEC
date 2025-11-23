window.onload = () => {
    let boton = document.getElementById("avanzar");
    let barra = document.getElementById("barraprogreso")
    let sumar = 0;
    let cadena = "";
    let texto = document.getElementById("text");
    boton.addEventListener("click", () => {
        sumar += 100;
        cadena = sumar.toString() + "px";
        if(sumar == 1500){
            texto.innerHTML = "Has llegado al limite, se va a reiniciar la barra.";
            sumar = 0;
        }
        else{
            texto.innerHTML = "";
        }
        barra.style.width = cadena;




    })

}