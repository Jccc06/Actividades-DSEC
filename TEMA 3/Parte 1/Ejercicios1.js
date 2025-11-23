/**
 * @name isOdd
 * @description Devuelve si un número es impar
 * 
 * @param {number} x - El número a evaluar
 * @returns {Boolean} Devuelve true si el número {x} es impar, false sino
 *
 * @example
 *  isOdd(3) // returns true
 

function isOdd(x){
    if(x%2!==0)
        return true
    else
        return false
}

console.log(isOdd(3));*/

/**
 * @name inRange
 * @description Devuelve si un número se encuentra dentro de un rango
 * 
 * @param {number} x - El número a evaluar si se encuentra dentro del rango
 * @param {number} min - El límite inferior del rango
 * @param {number} max - El límite superior del rango
 * @returns {Boolean} Devuelve true si el número {x} se encuentra dentro del rango definido por {min} y {max}, false sino
 *
 * @example
 *  inRange(2, -4, 10) // returns true
 

function inRange(x,min,max){
    if(x < max && x > min){
        return true;
    }
    else{
        return false;
    }
};

console.log(inRange(2,1,3));*/


/**
 * @name getBiggestNumber
 * @description Devuelve el número más grande de un array
 * 
 * @param {number[]} numbers - Un array de números
 * @returns {Number} El número más grande del array {numbers}
 *
 * @example
 *  getBiggestNumber([3, 8, 2, 1, 10]) // returns 10
 

function getBiggestNumber(numbers){
    return Math.max(...numbers);
};
let numbers = [2,3,4,5] 

console.log(getBiggestNumber(numbers));*/

/**
 * @name getPercentage
 * @description Devuelve el porcentaje correspondiente de un número
 * 
 * @param {number} number - Número a obtener el porcentage
 * @param {number} percentage - Porcentaje a obtener
 * @returns {Number}
 *
 * @example
 *  getPercentage(200, 10) // returns 20
 


function getPercentage(number,percentage){
    return (number * percentage)/100;
};

console.log(getPercentage(200, 10));*/

/**
 * @name getRandomColorSequence
 * @description Devuelve una secuencia aleatoria de ciertos colores con cierta longitud
 * 
 * @param {string[]} colors - Array de colores a ser utilizados en la secuencia
 * @param {number} length - Longitud de la secuencia
 * @returns {String[]} - Secuencia aleatoria de colores disponibles en {colors}, con longitud {length}
 *
 * @example
 *  getRandomColorSequence(["red", "blue", "green"], 4) // returns ['blue', 'red', 'red', 'green']
 

function getRandomColorSequence(colors,numlen){
        let array = [];
        for(i = 0; i < numlen;i++){
            array.push(colors[Math.floor(Math.random () * (colors.length - 0) + 0)]);
        }
        return array;
};

let array = ["red" , "blue" , "green"];

console.log(getRandomColorSequence(array, 4));*/

/**
 * @name getRockPaperScissor
 * @description Devuelve una jugada aleatoria de piedra, papel o tijera
 * 
 * @returns {String} - Devuelve "rock", "paper" o "scissor"
 *
 * @example
 *  getRockPaperScissor() // returns "paper"
 

function getRockPaperScissor(){
    let array = ["rock","paper","scissors"];
    return array[Math.floor(Math.random () * (array.length - 0) + 0)];
};

console.log(getRockPaperScissor());*/

/**
 * @name getRockPaperScissorRandomSequence
 * @description Devuelve una secuencia aleatoria de jugadas de piedra, papel o tijera, con cierta longitud
 *
 * @param {number} length - Longitud de la secuencia
 * @returns {String[]}
 *
 * @example
 *  getRockPaperScissorRandomSequence(4) // returns ["rock", "paper", "rock", "scissor"]

function getRockPaperScissorRandomSequence(number){
        let array2 = ["rock","paper","scissor"];
        let array = [];
        for(i = 0; i < number;i++){
            array.push(array2[Math.floor(Math.random () * (array2.length - 0) + 0)]);
        }
        return array;
}

console.log(getRockPaperScissorRandomSequence(4));*/


/**
 * @name filterNumbersGreaterThan
 * @description Filtra los números de un array que sean mayor a cierto número x dejando solo los que sean menores a este
 *
 * @param {number[]} numbers - Array de números a filtrar
 * @param {number} filter - Número a partir del cuál filtrar los demás números
 * @returns {Number[]} - Array de números filtrados menores a {filter}
 *
 * @example
 *  filterNumbersGreaterThan([3, 8, 12, 1, 7, 4], 7) // returns [3, 1, 4]
 

function filterNumbersGreaterThan(numbers,filter){
    let guardar = [];
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] < filter){
            guardar.push(numbers[i]);
        }
    }
    return guardar;
};
let array = [1,2,3,4,5,6]

console.log(filterNumbersGreaterThan(array,4));*/


/**
 * @name getFactorial
 * @description Devuelve el factorial de un número
 *
 * @param {number} x - Número del cuál obtener factorial
 * @returns {Number} - Factorial de {x}
 *
 * @example
 *  getFactorial(4) // returns 24
 

function getFactorial(x){
    let factorial = 1;
    for(let i = 1; i <= x;i++){
        factorial *= i; 
    }
    return factorial;
};

console.log(getFactorial(5));*/

/**
 * @name areArraysEqual
 * @description Devuelve si dos arrays son iguales (tienen los mismos ítems en el mismo orden)
 *
 * @param {[]} a 
 * @param {[]} b 
 * @returns {Boolean} - Devuelve true si ambos arrays son iguales, false sino
 *
 * @example
 *  areArraysEqual([1, 4], [1, 4]) // returns true
 
function areArraysEqual(a,b){
    valido = true;
    for(let i = 0;i <= a.length && valido;i++){
        if(a[i] == b[i]){
            valido = true;
        }
        else{
            valido = false;
        }
    }
    return valido;
};

console.log(areArraysEqual([1, 4], [1, 4]));*/

/**
 * @name toHackerSpeak
 * @description Convierte un string a "Hacker Speak". Para hacerlo, tiene que transformar las "a" 
 * en 4, las "e" en 3, las "i"
 * en 1, las "o" en 0 y las "s" en 5
 *
 * @param {string} text 
 * @returns {String} - El texto convertido a "Hacker Speak"
 * 
 * @example
 *  toHackerSpeak("I'm a hacker now") // returns "1'm 4 h4ack3r n0w"
 

function toHackerSpeak(text){
    let reemplazo;
    let resultado = "";
    for(let i = 0;i < text.length;i++){
        let char = text[i].toLowerCase();
        if(char == "a"){
            reemplazo = "4";
        }
        else if(char == "e"){
            reemplazo = "3";
        }
        else if(char == "i"){
            reemplazo = "1";
        }
        else if(char == "o"){
            reemplazo = "0";
        }
        else if(char == "s"){
            reemplazo = "5";
        }
        else{
            reemplazo = text[i];
        }
        resultado += reemplazo;
    }
    return resultado;
}

console.log(toHackerSpeak("I'm a hacker now"));*/


/**
 * @name getFileExtension
 * @description Obtiene la extensión de un archivo
 *
 * @param {string} file - El nombre del archivo a obtener la extensión 
 * @returns {String} - La extensión del archivo
 * 
 * @example
 *  getFileExtension("imagen.jpg") // returns "jpg"

function getFileExtension(file){
    let posicionPunto = 0;
    posicionPunto = file.indexOf(".");
    return file.slice(posicionPunto+1,file.length);
}

console.log(getFileExtension("imagen.jpg"));*/

/**
 * @name flatArray
 * @description Dado un array 2D, devuelve un array 1D que contiene todos los ítems 
 *
 * @param {[][]} arr - Array 2D a "aplanar" 
 * @returns {[]} - El array "aplanado"
 * 
 * @example
 *  flatArray([[1, 5, 4], [3, 10], [2, 5]]) // returns [1, 5, 6, 3, 10, 2, 5]
 
function flatArray(arr){
    let array1d = [];
    for(let vector of arr){
        array1d.push(...vector);
    }
    return array1d;
};

console.log(flatArray([[1, 5, 4], [3, 10], [2, 5]]));
*/

/**
 * @name removeDuplicates
 * @description Remueve duplicados de un array 
 *
 * @param {[]} arr - Array con duplicados a remover
 * @returns {[]} - El array resultante sin duplicados
 * 
 * @example
 *  removeDuplicates([4, 5, 10, 4, 10, 2]) // returns [4, 5, 10, 2]

function funcionCompararNumeros(a,b){
    if(a<b){
        return -1;
    }
    else if(a>b){
        return 1;
    }
    else{
        return 0;
    }
}

function removeDuplicates(arr){
    let array = arr.sort(funcionCompararNumeros);
    for(let i = 0; i < arr.length;i++){
        if(array[i] == array[i+1]){
        let indice = array.indexOf(array[i]);
        array.splice(indice,1);
        }
    }
    return array;
}

console.log(removeDuplicates([4, 5, 10, 4, 10, 2]));*/


// OTRA FORMA 
/*

function removeDuplicates(arr){
    let result = [];

    for(let ele of arr)
        if(result.indexOf(ele) == -1)
            result.push(ele);
        
    return result;
}

console.log(removeDuplicates([4, 5, 10, 4, 10, 2]))*/

/**
 * @name countLetter
 * @description Devuelve la cantidad de veces que una letra aparece en un string 
 *
 * @param {string} letter - Letra a contar
 * @param {string} text - Texto sobre el que realizar la cuenta de {letter}
 * @returns {Number} - Número de veces que aparece {letter} en {text}
 * 
 * @example
 *  countLetter("a", "javascript") // returns 2
 
function countLetter(letter,text){
    let contador = 0;
    for(let i = 0; i < text.length;i++){
        if(text[i] == letter){
            contador += 1;
        }
    }
    return contador;
};

console.log(countLetter("a","javascript"));*/

/**
 * @name canPlay
 * @description Devuelve si dada una mano de Uno y una carta en la mesa, puede jugar o tiene que retirar del mazo. Las cartas
 * tienen uno de 4 colores posibles (red, blue, green or yellow) y un número del 1 al 9. Una carta se escribe como un string
 * con color y número. Por ejemplo: "yellow 3", "red 6". Se puede jugar si la carta en la mano coincide en color o en número
 * con la carta en la mesa
 *
 * @param {string[]} hand - Array de cartas que tiene en la mano 
 * @param {string} face - Carta que está en la mesa
 * @returns {Boolean} - Devuelve true si puede jugar alguna carta, o false si tiene que retirar del mazo
 * 
 * @example
 *   canPlay(["yellow 3", "yellow 5", "red 8"], "red 2") // returns true
 *   canPlay(["yellow 3", "yellow 5", "red 8"], "blue 5") // returns true
 *   canPlay(["yellow 3", "blue 5", "red 8", "red 9"], "green 4") // returns false
 *   canPlay(["yellow 3", "red 8"], "green 2") // returns false
 */




/**
 * @name removeWords
 * @description Dado un string y un array de palabras a remover, devuelve el string sin las palabras removidas
 *
 * @param {string} str - Texto a recortar 
 * @param {string[]} words - Palabras a remover
 * @returns {string} - Texto resultante con las palabras removidas
 * 
 * @example
 *   removeWords("This is a really bad test", ["really", "bad"]) // returns "This is a test"
 
function removeWords(str, words) {
    let newtexto = str; 
    for (let i = 0; i < words.length; i++) {
        newtexto = newtexto.replace(words[i], "");
    }
    return newtexto;
}

console.log(removeWords("This is a really bad test", ["really", "bad"]));*/




/**
 * @name getRange
 * @description Dado dos números, devuelve un array con los números enteros sucesivos entre ellos, puede incluir los números 
 * iniciales o no
 *
 * @param {number} a 
 * @param {number} b
 * @param {boolean} [inclusive=true] inclusive // Parámetro opcional, valor por defecto true
 * @returns {number[]} - Array de números entre a y b, incluyendo a y b
 * 
 * @example
 *   getRange(5, 10) // returns [5, 6, 7, 8, 9 ,10]
 *   getRange(3, -2) // returns [3, 2, 1, 0, -1, -2]
 *   getRange(-5, -10, false) // returns [-6, -7, -8, -9]
 

function getRange(a,b,inclusive=true){
    let rango = [];
    if (a < b){
        let start = inclusive ? a : a + 1;
        let end = inclusive ? b : b - 1;
        for(let i = start; i <= end;i++){
            rango.push(i);
        }
    }
    else{
        let start = inclusive ? a : a - 1;
        let end = inclusive ? b : b + 1;
        for(let i = start; i >= end;i--){
            rango.push(i);
        }
    }
    return rango;

};

console.log(getRange(5, 10));  
console.log(getRange(15, 5)); */