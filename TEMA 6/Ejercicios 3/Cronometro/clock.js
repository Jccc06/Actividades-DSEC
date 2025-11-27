let minutos = 0;
let segundos = 0;
let stopnum = false;
let intervalo;

window.onload = () => {
    let start = document.getElementById("Start");
    let stop = document.getElementById("Stop");
    let reset = document.getElementById("Reset");
   
    start.addEventListener("click",() => {
        if(!intervalo){
            intervalo = setInterval(clock,1000);
        }
        
    })

    stop.addEventListener("click", () => {
        clearInterval(intervalo);
        intervalo = null;
    })

    reset.addEventListener("click",() => {
        minutos = 0;
        segundos = 0;
    })

    
}


function clock(){
        let texto = document.getElementById("clock");
        if(segundos == 59){
            minutos ++;
            segundos = 0;
        }
        else{
            segundos++
        }

        texto.innerHTML = (minutos<10 ? "0" + minutos : minutos) + ":" + (segundos<10 ? "0" + segundos : segundos);

}

