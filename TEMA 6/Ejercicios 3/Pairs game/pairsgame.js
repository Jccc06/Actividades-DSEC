//Baraja de Valores:
var cartas =["bastos","bastos","copas","copas","espadas","espadas","oros","oros"];
var numAleatorio;
var baraja=["","","","","","","",""];
var parejasHechas= ["","","",""];
//el div "cartas"
var imagenes;
//la carta a crear
var nuevoHijo;
//al pulsar una carta
var cartaActual;
var cartaAnterior;
var PrimeraCartaPulsada=false;
var parejaSacada=false;
var bloqueado=false;
var pulsada;
let minutos = 0;
let segundos = 0;
let stopnum = false;
let intervalo = false;
let time;
let perder;
let ganar;
let contador = 0;

window.onload = ()=>{
    imagenes = document.getElementById("cartas");
    ganar = document.getElementById("win");
    
     if(contador == 4){
        ganar.innerHTML = "Has ganado!";
        clearInterval(intervalo);
    }

    //al hacer click en una imagen
    imagenes.addEventListener("click", (e)=>{
        
        if(!intervalo){
            intervalo = setInterval(clock,1000);
        }
  
       

        if(!parejasHechas.includes(e.target))
        {   
            if(!bloqueado)
            {   
                cartaActual=e.target;
                if(PrimeraCartaPulsada==false)
                {
                    cartaActual.src="img/"+baraja[cartaActual.id]+".png";
                    pulsada=cartaActual;
                    cartaAnterior=cartaActual;
                    PrimeraCartaPulsada=true;
                }
                else
                {
                    bloqueado=true;
                    cartaActual.src="img/"+baraja[cartaActual.id]+".png";
                    if(baraja[cartaActual.id]==baraja[cartaAnterior.id])
                    {
                        parejasHechas.push(cartaActual);
                        parejasHechas.push(cartaAnterior);
                        PrimeraCartaPulsada=false;
                        setTimeout(() => {
                            PrimeraCartaPulsada=false;
                            cartaActual=null;
                            cartaAnterior=null;
                            bloqueado=false;
                            contador++;
                        }, 1000); 
                    }
                    else
                    {
                        setTimeout(() => {
                            cartaActual.src="img/cartadetras.png";
                            cartaAnterior.src="img/cartadetras.png";
                            PrimeraCartaPulsada=false;
                            cartaActual=null;
                            cartaAnterior=null;
                            bloqueado=false;
                        }, 1000);      
                    }
                }
                
                
            }
        }
    })
    
    generarCartas();

    
}

function generarCartas()
{
    //barajar
    cartas.forEach(carta => {
    //elegir la carta actual y ponerla en una posicion aleatoria
    do
    {
        numAleatorio=Math.floor(Math.random() * 8) + 0;
    }
        while(!baraja[numAleatorio]=="");
        baraja[numAleatorio]=carta;

        
    });
}

function clock(){
        time = document.getElementById("Time");
        perder = document.getElementById("lose");
        
        if(segundos == 59){
            minutos ++;
            segundos = 0;
        }
        else{
            segundos++
        }

        time.innerHTML = (minutos<10 ? "0" + minutos : minutos) + ":" + (segundos<10 ? "0" + segundos : segundos);

        if(minutos > 0){
            perder.innerHTML = "Pierdes";
            clearInterval(intervalo);
        }
}





