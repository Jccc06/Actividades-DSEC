/*//Conversion de cadenas a numeros
let cadena1 = "123";
let numero1 = Number.parseInt(cadena1);
let cadena2 = "3.14";
let numero2 = Number.parseInt(cadena2);
let cadena3 = "abc";
let numero3 = Number.parseFloat(cadena3);
document.write(cadena1 +  " " + cadena2 + " " + cadena3);


function devuelvetrue(x){
    if(Number.isInteger(x)){
        return true;
    }
    return false;
};

console.log(devuelvetrue(5));

let prueba1 = Number.isNaN("Hello");
let prueba2 = Number.isNaN(undefined);
let prueba3 = Number.isNaN(0/0);
let prueba4 = Number.isNaN(parseInt("abc"));

console.log("Hello:  " + prueba1 + "  Indefinido:  " + prueba2 + "  0/0  " + prueba3 + "  ABC convertido a int  " + prueba4);

let division = 1/0;
console.log(Number.isFinite(division));*/

/*// Ejercicio 2

let numeroA = 3.141592;
console.log(numeroA.toFixed(2));
console.log(numeroA.toFixed(4));
console.log(numeroA.toFixed(6));

let numeroB = 123456;
console.log(numeroB.toExponential(2));

let numeroC = 255;
console.log(numeroC.toString(2));
console.log(numeroC.toString(8));
console.log(numeroC.toString(16));

let numeroD = 123.456789;
console.log(numeroD.toPrecision(4));
console.log(numeroD.toPrecision(7));
*/

//Ejercicio 3

function ValidarCadena(x){
    let numero = Number.parseInt(x);
    if(isNaN(numero)){
        return "No es un numero válido";
    }
    else if(Number.isInteger(numero)){
        return "Es entero";
    }
    else{
        return "es decimal";
    };         
};

console.log(ValidarCadena("123"));

