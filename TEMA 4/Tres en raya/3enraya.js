const movGanadores = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function generarMovimientos() {
  let mov = [];
  while (mov.length < 3) {
    let num = Math.floor(Math.random() * 9);
    if (!mov.includes(num)) mov.push(num);
  }
  return mov;
}

let movX = generarMovimientos();
let mov0 = generarMovimientos();

console.log("Movimientos X:", movX);
console.log("Movimientos O:", mov0);

let ganador = 0;
let Xo0 = 0;

for (let i = 0; i < movGanadores.length; i++) {
  if (movGanadores[i].every(pos => movX.includes(pos))) {
    ganador = 1;
    Xo0 = 2;
  } else if (movGanadores[i].every(pos => mov0.includes(pos))) {
    ganador = 1;
    Xo0 = 4;
  }
}

if (ganador === 1 && Xo0 === 2) {
  console.log("Han ganado las X");
} else if (ganador === 1 && Xo0 === 4) {
  console.log("Han ganado los 0");
} else {
  console.log("No ha ganado nadie. Empate.");
}




