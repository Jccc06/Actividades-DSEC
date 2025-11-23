// Ej 1

let nombre = "Ana";
console.log(nombre);

// Ej 2

let edad = 20;
console.log(edad);

// Ej 3

let a = 5;
let b = 10;
if (a == b) {
  console.log("a es igual a b");
};

// Ej 4

let i = 0;
while (i < 5) {
    i ++;
    console.log(i);
}

// Ej 5

var nombre5 = "Jose";
function saludar() {
  console.log("Hola " + nombre);
}
saludar(nombre5);

// Ej 6

let frutas = ["manzana" , "banana", "pera"];
console.log(frutas[2]);

// Ej 7
let persona = { nombre2: "Ana", edad2: 25 };
console.log(persona.nombre2.toUpperCase());

//Ej 8
let a2 = 5;
let b2 = "10";
console.log(a2 + Number(b2));

// Ej 9

let nota = 8;
if (nota > 5)
{
  console.log("Aprobado");
} else {
  console.log("Reprobado");
};

// Ej 10

let numeros = [1, 2, 3, 4, 5];
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}