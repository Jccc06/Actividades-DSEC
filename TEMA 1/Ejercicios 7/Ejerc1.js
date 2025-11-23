let num1 = Number(prompt("Ingrese el primer número"));
let num2 = Number(prompt("Ingrese el segundo número"));

// Tu código aquí para mostrar suma, resta, multiplicación y división

alert(num1 + " + " + num2 + " = " + (num1 + num2));
alert(num1 + " - " + num2 + " = " + (num1 - num2));
alert(num1 + " * " + num2 + " = " + (num1 * num2));
alert(num1 + " / " + num2 + " = " + (num1 / num2));

let a = Number(prompt("Número 1"));
let b = Number(prompt("Número 2"));
let c = Number(prompt("Número 3"));
// Escribe un condicional para encontrar el mayor

if(a > b && a > c){
    if(b > c){
        alert(a + " > " + b + " > " + " c");
    }
}
else {
  if(c > a && c > b){
    if(b > a){
         alert(c + " > " + b + " > " + a);
    }
  }
  else{
     alert(b + " > " + c + " > " +  a);
  }
};

let num = Number(prompt("Ingrese un número"));
// Usa un bucle for para mostrar la tabla de multiplicar
let resultado = 0;
for(var i = 0; i <= 10; i++){
    resultado = num * i;
    alert(num + " * " + i + " = " + resultado);
};

let N = Number(prompt("Ingrese un número"));
// Usa un bucle for y una variable acumuladora para sumar
let resultado2 = 0;
for(var i = 0; i <= N; i++){
    resultado2 += i;
};
alert("Resultado suma de 1 al " + N + ": " + resultado2);



let positivos = 0;
let negativos = 0;

for(let i = 0; i < 5; i++) {
    let num = Number(prompt(`Ingrese el número ${i+1}`));
    if(num >= 0){ 
        positivos++;
    }
    else{
        negativos++;
    };
}
alert("Total p: " + positivos + " Total n: " + negativos);


let num3 = Number(prompt("Ingrese un número"));
// Usa un bucle para verificar si es divisible por algún número menor que él
let comprobar = 0;
for(var i = 0; i <= num3; i++){
    if(num3%i == 0){
        alert("El numero " + i + " si es divisible entre " + num3);
        comprobar ++;
    }
    else{
        alert("El numero " + i + " no es divisible entre " + num3);
    };
};
if(comprobar > 2){
    alert("No es primo");
}
else{
    alert("Es primo");
};


let numero6 = Number(prompt("Ingrese un número"));
let factorial = 1;
// Calcula el factorial con un bucle
for(var i = 1; i <= numero6; i ++){
    factorial = factorial * i;
}
alert("El factorial de " + numero6 + " es: " + factorial);

let N2 = Number(prompt("Ingrese un número"));
// Usa un bucle y el operador % para imprimir los pares
for(var i = 0; i <= N2; i++){
    if(i%2 == 0){
        alert(i + " es primo");
    }
    else{
        alert(i + " no es primo");
    };
}

let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intento;

while(intento !== numeroSecreto) {
    intento = Number(prompt("Adivina el número entre 1 y 10"));
    // Indica si el intento es mayor, menor o correcto
    if(intento == numeroSecreto){
        alert("Es correcto el numero era: " + numeroSecreto);
    }
    else{
        if(numeroSecreto > intento){
            alert("Es mayor");
        }
        else{
            alert("Es menor");
        }
    };
}
