/*function ValorAbsoluto(x){
    let valorabsoluto = Math.abs(x);
    return valorabsoluto;
};

console.log(ValorAbsoluto(5));

let numero = Number(prompt("Dime un numero decimal: "));

console.log(Math.round(numero));
console.log(Math.ceil(numero));
console.log(Math.floor(numero));

let numero2 = Math.pow(5,2);
console.log(numero2);
let numero3 = Math.sqrt(81);
console.log(numero3);

const array = [10, -5, 3, 99, 42];
console.log(Math.max(...array));
console.log(Math.min(...array));*/

/*// Ejercicio 2
let aleatorio = Math.random() * (1 - 0) + 0;
console.log(aleatorio);

let aleatorio2 = Math.floor(Math.random() * (6 - 1) + 1);
console.log(aleatorio2);

function NumeroAleatorio(x,y){
    let aleatorio = Math.round(Math.random() * (x - y) + y) //x = max y = min
    return aleatorio;
};

console.log(NumeroAleatorio(10,2));*/

/*
//Ejercicio 3

let senos = Math.sin(0,785398);
let cosenos = Math.cos(0,785398);

console.log(senos);
console.log(cosenos);

let arco = Math.atan(1,47198);
console.log(arco);

let logaritmo = Math.log(10);
console.log(logaritmo);*/

//Ejercicio 4

/*let aleatorio = Math.floor(Math.random() * (100 - 1) - 1);
let intento = Number(prompt("Dime un numero"));

while(aleatorio != intento){
    intento = Number(prompt("Dime un numero"));
    if(aleatorio > intento){
        console.log("Es mayor");
    }    
    else{
        console.log("Es menor");
    }
};

console.log("Has acertado!!!");*/

/*let x1 = 20;
let x2 = 15;
let y1 = 10;
let y2 = 5;

let formula = Math.sqrt((x2 - x1)^2 + (y2 - y1)^2);

console.log(formula);*/

/*let ruleta = Math.floor(Math.random() * (36 - 0) - 0);
let intento = Number(prompt("Elige un numero: "));
    if(ruleta != intento){
        console.log("Mala suerte, has perdido todo.");
    }
    else{
        console.log("Has ganado!!!");
};*/

let contraseña = Math.floor(Math.random() * (9999999 - 0) - 0);
console.log("Tu contraseña es: " + contraseña);



