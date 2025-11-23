/*
let date1 = new Date(); 
console.log(date1);
let date2 = new Date("2006/04/07 22:00:00");
console.log(date2);

let año = date1.getFullYear();
console.log(año);
let mes = date1.getMonth();
console.log(mes);
let dia = date1.getDate();
console.log(dia);
let diasemana = date1.getDay();
console.log(diasemana);
let horaminssec = date1.getTime();
console.log(horaminssec);

let fecha = date1.toDateString();
console.log(fecha);
let fecha2 = date1.toTimeString();
console.log(fecha2);*/

//Ejercicio 2

/*function SumaFecha(x,y){
   return new Date(x + y);
};

const week = 1000 * 60 * 60 * 24 * 7;
const date = new Date().getTime();

console.log(SumaFecha(date,week));*/


/*let date2 = new Date("2025/12/31 23:00:00").getTime();
let date = new Date().getTime();

let resultado = (date2 - date)/ 86400000;

console.log(Math.round(resultado));*/

/*let date2 = new Date("2025/06/05 23:00:00").getTime();
let date = new Date().getTime();

if(date > date2){
    console.log("La fecha 1 es posterior que la 2");
}
else{
    console.log("La fecha 2 es posterior que la 1");
};*/

/*let date = new Date("2025/09/24 14:33:00");
let año = date.getFullYear();
let mes = date.getMonth();
function AveriguarDia(x,y){
    let date = new Date(x,y).getDay();
    return date;
};
console.log(AveriguarDia(año,mes));*/

//Ejercicio 3
/*let date = new Date().toISOString();
console.log(date);

let localdate = new Date(date);
let localDateString = localdate.toLocaleString();
console.log(localDateString);*/

/*let date = new Date();
console.log(new Intl.DateTimeFormat("es-ES").format(date));
console.log(new Intl.DateTimeFormat("en-US").format(date));
console.log(new Intl.DateTimeFormat("ja-JP-u-ca-japanese").format(date));*/

/*function FechaString(date){
    let FechaString = date.getDate() + "/" + date.getMonth()+ "/" +  date.getFullYear() + " " 
    + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    return FechaString;
}

let date = new Date();

console.log(FechaString(date));*/

//Ejercicio 4
/*let date2 = new Date("2026/01/01 00:00:00").getTime();
let date = new Date().getTime();

let dias = Math.round((date2 - date) / (1000 * 60 * 60 * 24));
let horas = Math.round((date2 - date) / (1000 * 60 * 60));
let minutos = Math.round((date2 - date) /  (1000 * 60)); 
let segundos = Math.round((date2 - date) / (1000)); 

console.log("Días: " + dias + " Horas: " + horas + " Minutos: " + minutos + " Segundos: " +
segundos);*/

/*function AdivinarEdad(date){
    let date1 = date.getTime();
    let date2 = new Date().getTime();
    let dias = Math.round((date2 - date) / (1000 * 60 * 60 * 24));
    let meses = Math.round((date2 - date) / (1000 * 60 * 60 * 24 * 31));
    let años = Math.round((date2 - date) / (1000 * 60 * 60 * 24 * 31 * 12));
    return "Años: " + años + " Meses: " + meses + " dias: " + dias;
}

let date = new Date("2006/04/06");
console.log(AdivinarEdad(date));*/

/*let date = new Date("2025/09/01");
let arraydias = [date];


for(let i = 0; i <= 30; i++){
    let nuevodia = new Date(date.setDate(i));
    arraydias.push(nuevodia);
};

console.log(arraydias);*/
