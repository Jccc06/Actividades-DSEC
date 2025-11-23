window.onload = () => {
    let boton = document.getElementById("boton");
    let texto = document.getElementById("text");
    
    boton.addEventListener("mouseover",() => {
        boton.style.backgroundColor = "red";
        
    })

 

    boton.addEventListener("click", () => {
        texto.innerHTML = "Me hiciste click!";
      
       
    })

    boton.addEventListener("mouseout",() => {
        boton.style.backgroundColor = "chocolate";
        texto.innerHTML = "";
    })

}