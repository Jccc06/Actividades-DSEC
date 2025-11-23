
class piedraPapelTijera{
    //Creamos los jugadores
    jugador1;
    jugador2;

    constructor(){ //En el constructor iniciamos las variables con el metodo piedraPapelTijera.
        this.jugador1 = this.piedraPapelTijera(); 
        this.jugador2 = this.piedraPapelTijera();
    }

    piedraPapelTijera(){
        let ppt = ["Piedra","Papel","Tijera"]; //Creo un array con las 3 probabilidades
        let jugador = "";
        let num; 
    
        num = Math.floor(Math.random() * 3);// Un numero aleatorio para que sea el indice del array
        jugador += ppt[num]; //Se le asigna una cadena completamente aleatoria
        

        return jugador;
    };

    comprobarGanador(){
        let cadena;
        //Una muy larga cadena de if else if para comprobar el ganador
        //Hago toLowerCase para comparar con la cadena en minuscula
        if(this.jugador1.toLocaleLowerCase() == "papel" && this.jugador2.toLocaleLowerCase() == "tijera" ||
        this.jugador2.toLocaleLowerCase() == "papel" && this.jugador1.toLocaleLowerCase() == "tijera" ){
            cadena = " Gana tijera";
        }
        else if(this.jugador1.toLocaleLowerCase() == "papel" && this.jugador2.toLocaleLowerCase() == "piedra" ||
        this.jugador2.toLocaleLowerCase() == "papel" && this.jugador1.toLocaleLowerCase() == "piedra" ){
            cadena = " Gana papel";
        }
        else if(this.jugador1.toLocaleLowerCase() == "piedra" && this.jugador2.toLocaleLowerCase() == "tijera" ||
        this.jugador2.toLocaleLowerCase() == "piedra" && this.jugador1.toLocaleLowerCase() == "tijera" ){
            cadena = " Gana piedra";
        }
        else if(this.jugador1 === this.jugador2){
            cadena = " Empate";
        }
        return cadena;
    }

    mostrarInformacion(){
        return "Jugador 1 saca: " + this.jugador1 + ", jugador 2 saca: " + this.jugador2 + ", " +
        this.comprobarGanador();
    }

}

partida1 = new piedraPapelTijera();

console.log(partida1.comprobarGanador());
console.log(partida1.mostrarInformacion());


