/*
function randomLetter() {
  let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return letras.charAt(Math.floor(Math.random() * letras.length));
}

function randomDigit() {
  return Math.floor(Math.random() * 10).toString();
}

function generatePlate() {
  let letras = randomLetter() + randomLetter() + randomLetter();
  let numeros= randomDigit() + randomDigit() + randomDigit() + randomDigit();
  return letras + "-" +numeros;
}

console.log(generatePlate()); */
/*
function randomFace(){
    return Math.floor(Math.random() * (6 - 1) - 1); 
}


function sumaCaras(){
    let resultado = randomFace() + randomFace() + randomFace();
    return resultado;
}

console.log(sumaCaras());*/
/*
function alfaNum(){
let alfanum = "12ABCD34EFEJ546545KDSJF212IJIDJ23I4";
return alfanum.charAt(Math.floor(Math.random() * (16)));
};

function genalfNum(){
    let cadena = 0;
    for(let i = 0;i <= 16; i++){
        cadena += alfaNum();
    };
    return cadena;
};

console.log(genalfNum());*/

/*
let contraseña = Number(prompt("Dime tu contraseña: "));
let regex = /^[A-Za-z]{8}[A-Z]\d[.\-,+´`]/;

if(regex.test(contraseña)){
    console.log("Contraseña correcta.");
}
else{
    console.log("Contraseña incorrecta.");
};*/
/*
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 7;

while (intentos > 0) {
  let intento = Number(prompt("Adivina el número (1-100). Te quedan " + intentos + " intentos:"));

  if (intento === numeroSecreto) {
    alert("¡Correcto! El número era " + numeroSecreto);
    intentos = 0;
  } else if (intento < numeroSecreto) {
    alert("El número es más alto");
  } else {
    alert("El número es más bajo");
  };

  intentos--;

  if (intentos === 0) {
    alert("Te quedaste sin intentos. El número era " + numeroSecreto);
  };
};*/

/*function decodeRLE(cadena){
  let cadenaDecodificada = "";

  for(let i = 0; i<cadena.length;i+=2){
    cadenaDecodificada += cadena[i].repeat(Number(cadena[i+1]));
  };

  return cadenaDecodificada;

};*/
/*
//Media

let numeros = "10 20 30 40 50 60";
let suma = 0;
let resultado = 0;
let array = numeros.split(" ");
let contador = 0;
for(let i = 0; i < array.length;i++){
  suma += Number(array[i]);
  contador ++;
};
resultado = suma / contador;

//Mediana

console.log(resultado);
let mediana = 0;
for(let j = 0; j < array.length;j++){
  if(array.length % 2 == 0){
    mediana = (array[array.length/2 - 1] + array[array.length/2]) / 2;
  }
  else{
    mediana = array[Math.floor(array.length/2)];
  };
};
console.log(mediana);

//Desviacion estandart

let desviacion = 0;
let desest = 0;
for(let k = 0; k < array.length;k++){
   desviacion += Math.pow((array[k] - resultado),2); 
};
desest = Math.sqrt(desviacion / contador);
console.log(desest);
*/
/*
let palabra = "javascript";
let contador = 10;
let ahorcado = "";
while(contador > 0){
  for(let i = 0; i < palabra.length; i++){
      let adivinar = prompt("Dime una letra").charAt(0);
      if(palabra.includes(adivinar)){
        ahorcado +=  adivinar + " ";
        contador --;
      }
      else{
        ahorcado += " _ ";
        contador --;
      }
  };
};
console.log(ahorcado);*/
