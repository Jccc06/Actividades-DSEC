//Ej 1
let numero = 10;
if (numero > 5) {
  numero = 20;
}
console.log(numero);

//Ej 2
let ciudad = "Madrid";
console.log(ciudad);

//Ej 3
function sumar(a, b) {
  let resultado = a + b;
  return resultado;
}
console.log(sumar(2, 3));

//Ej 4
let i = 0;
while (i <= 5) {
    i++;
     console.log(i);

}
//Ej 5
let saludo = "Hola";
let nombre = "Luis";
console.log(saludo + " " + nombre);

//Ej 6
let dias = ["Lunes", "Martes", "Miércoles"];
console.log(dias[2]);

//Ej 7
let usuario = { nombre: "Ana", edad: 25 };
console.log(usuario.nombre.toLowerCase());

//Ej 8
let edad3 = 18;
if (edad3 == 18) {
  console.log("Tienes 18 años");
}

//Ej 9
let numeros = [1, 2, 3, 4, 5];
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
};

//Ej 10
let palabra = "javascript";
for (let i = 0; i < palabra.length(); i++) {
  console.log(palabra[i]);
}