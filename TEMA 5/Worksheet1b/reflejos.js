window.onload = () => {
    let boton = document.getElementById("boton");
    let texto = document.getElementById("text");
    let clickado = 0;

 

    boton.addEventListener("click",() => {
        if(boton.style.backgroundColor == "green"){
                texto.innerHTML = "Que reflejos!";
            }
        else{
            texto.innerHTML = "Demasiado pronto :(";
            clickado = 1;
        }
        boton.style.backgroundColor = "grey";
    })

    setTimeout(() => {
        if(clickado == 0)
        boton.style.backgroundColor = "green";
        else
        boton.style.backgroundColor = "grey";
    }, 5000);

console.log("Esta línea se ejecuta antes de que pasen los 3 segundos");

}

