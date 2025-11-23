window.onload = () => {
    let abecedario = [
    "a","b","c","d","e","f","g","h","i","j","k","l","m",
    "n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"
    ];
    let tecla = document.querySelector("input");
    let texto = document.getElementById("text");
    let num = Math.floor(Math.random() * 26)
    texto.innerHTML = "Presiona la tecla: " + abecedario[num];

    tecla.addEventListener("keydown",(e) => {
        if(e == abecedario[num])
            console.log("acertado");
    })


}