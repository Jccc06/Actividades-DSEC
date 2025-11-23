//  Ejercicio 1
/*
let cadena = "Javascript";
console.log(cadena.length);

let cadena2 = "Hola mundo"
console.log(cadena2.charAt(0),cadena2.charAt(9));

let cadena3 = "Programar es divertido";
console.log(cadena3.toLowerCase());
console.log(cadena3.toUpperCase());

let cadena4 = "Hola";
let cadena5 = "Mundo";
let resultado = cadena4.concat(cadena5);
console.log(resultado);*/

//Ejercicio 2

/*let cadena = "Hola mundo";
console.log(cadena.indexOf("o"));
console.log(cadena.lastIndexOf("o"));

let cadena2 = "JavaScript es genial";
console.log(cadena2.substring(0,10));
console.log(cadena2.slice(14));

let cadena3 = "El perro corre rápido";
let cadena4 = "gato";
console.log(cadena3.replace("perro",cadena4));*/

/*let cadena = "Frontend Developer";

console.log(cadena.includes("end"));
console.log(cadena.startsWith("Front"));
console.log(cadena.endsWith("per"));*/

//Ejercicio 3

/*let cadena = "rojo,verde,azul,amarillo";
console.log(cadena.split(","));

let cadena2 = "Hola";
console.log(cadena2.repeat(5));

let cadena3 = "   Hola mundo   ";
console.log(cadena3.trim());

let numero = "7";
console.log(numero.padStart(3,"0")); */

//Ejercicio 4
/*
let arrayvocal = ["a", "e", "i", "o" , "u"];
let cadena = "Cuantas vocales tiene";
let numerovoc = 0;

for(let i = 0; i <= arrayvocal.length;i++){
    if(cadena.match(arrayvocal[i])){
        numerovoc++;
    };
};

console.log("La cadena tiene " + numerovoc + " vocales");*/

/*let cadena = "JavaScript";
let cadenainvertida = "";

for(let i = cadena.length; i >= 0;i--){
        cadenainvertida += cadena.charAt(i);
};

console.log(cadenainvertida);*/
/*
let cadena = "hola mundo desde javascript"
let array = [];
array.push(cadena.split(" "));
let cad1 = array[1];
let cad2 = array[2];
let cad3 = array[3];
let cad4 = array[4];
let cad5 = cad1.charAt(0).toUpperCase();
let cad6 = cad2.charAt(0).toUpperCase();
let cad7 = cad3.charAt(0).toUpperCase();
let cad8 = cad4.charAt(0).toUpperCase();*/
/*
let numero = "1234567812345678"

for(let i = 0; i <= numero.length;i++){
    numero = numero.replace(i,"*");
};

console.log(numero);*/

let cad = "El lenguaje JavaScript es muy poderoso";
let array = cad.split(" ");
console.log("La frase: " + cad + ", tiene: " + array.length + " palabras");

