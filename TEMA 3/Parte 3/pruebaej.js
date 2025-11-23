// 1

/*
a = 1;
b = 2;
let suma = (a,b) => a + b
console.log("the answer to everything is", suma(a,b));*/

//2

/*
let str = " Me encanta javascript"; 

let longitudCadena = (str) => "La longitud de, " +str+ " ,es: " + str.length;

console.log(longitudCadena(str));*/

//3
/*
let str = " Me encanta javascript"; 
let longitud = str.length;

let longitudCadena = (str) => "La longitud de, " +str+ " ,es: " + longitud;

console.log(longitudCadena(str));*/

//4
/*
let alerts = ["Hey, you are awesome", "You are so wonderful", 
    "What a marvel you are", "You're so lovely",
     "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"];

let showAlert = (alerts) => alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${alerts}!`);

showAlert(alerts);*/

//6
/*
let nombre = "Juan Carlos";
let age = "19";

let devuelveString = (nombre,age) => "Hola me llamo, " +nombre+ " y tengo " +age+ " años.";

console.log(devuelveString(nombre,age));*/

//7
/*
let enteros = [1,2,3,4,5];

console.log(enteros.reduce((a,b) => a+b,0));*/

//8
/*
let eye = "eye";

const fire = () => {return `bulls-`};

console.log(fire());*/

//9
/*
const fibonacci = function(n) {
if (n < 3) return 1;
return fibonacci(n - 1) + fibonacci(n - 2);
}*/