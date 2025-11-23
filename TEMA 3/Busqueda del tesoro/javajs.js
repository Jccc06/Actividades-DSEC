const arraymapa = [
  [34, 21, 32, 41, 25],
  [14, 42, 43, 14, 31],
  [54, 45, 52, 42, 23],
  [33, 15, 51, 31, 35],
  [21, 52, 33, 13, 23]
];

function solucionaBusTesoro(tablero) {
  // Empezamos en [1,1]
  let fAct = 1;
  let cAct = 1;
  let solucion = false;

  
  while (!solucion) {

    let valor = tablero[fAct - 1][cAct - 1]; // valor actual
    let sigF = Math.floor(valor / 10); // primera cifra
    let sigC = valor % 10;             // segunda cifra
    
    // ¿hemos llegado al tesoro?
    if (sigF === fAct && sigC === cAct) {
      console.log(`Tesoro encontrado en (${fAct},${cAct})`);
      solucion = true;
      return valor;
    } else {
      // actualizamos posición
      fAct = sigF;
      cAct = sigC;
    }
  }
}

console.log("Número del tesoro:", solucionaBusTesoro(arraymapa));
