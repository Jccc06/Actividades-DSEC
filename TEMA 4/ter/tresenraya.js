class TresEnRaya {

    tablero;
    turnoJugador;

    constructor() {
        this.reiniciaPartida();
    }

    mueveJ1(celdaX, celdaY) {
        return this.mueve(celdaX, celdaY, 1);
    }

    mueveJ2(celdaX, celdaY) {
        return this.mueve(celdaX, celdaY, -1);
    }

    // Devuelve 
    // 0 si el movimiento es correcto
    // 1 si la casilla está ocupada
    // 2 si no es el turno del jugador
    // 3 si con ese movimiento el jugador gana
    // 4 empate
    mueve(celdaX, celdaY, jugador) {
        let variable = 0;

        // Comprobar si la celda está vacía
        if (this.tablero[celdaX][celdaY] === 0) {
            if (jugador === this.turnoJugador) {
                this.tablero[celdaX][celdaY] = jugador;

                // Comprobamos si el jugador gana
                if (this.movGanador(jugador)) {
                    variable = 3;
                } else if (this.tableroLleno()) {
                    variable = 4; // Empate
                } else {
                    this.turnoJugador *= -1;
                    variable = 0; // Movimiento correcto
                }
            } else {
                variable = 2; // No es su turno
            }
        } else {
            variable = 1; // Casilla ocupada
        }

        return variable;
    }

    // Método que comprueba si un jugador ha ganado
    movGanador(jugador) {
        // Combinaciones ganadoras (por coordenadas)
        const lineasGanadoras = [
            // Filas
            [[0, 0], [0, 1], [0, 2]], //fila 1
            [[1, 0], [1, 1], [1, 2]], //fila 2
            [[2, 0], [2, 1], [2, 2]], //fila 3
            // Columnas
            [[0, 0], [1, 0], [2, 0]], //columna 1
            [[0, 1], [1, 1], [2, 1]], //columna 2
            [[0, 2], [1, 2], [2, 2]], //columna 3
            // Diagonales
            [[0, 0], [1, 1], [2, 2]], //diagonal 1
            [[0, 2], [1, 1], [2, 0]] //diagonal 2
        ];

        for (let linea of lineasGanadoras) {
            if (linea.every(([x, y]) => this.tablero[x][y] === jugador)) {
                return true;
            }
        }
        return false;
    }

    // Comprobar si el tablero está lleno (empate)
    tableroLleno() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (this.tablero[i][j] === 0) {
                return false;
            }
        }
    }
        return true;
    }


  reiniciaPartida(){ //Creo tablero e inicializo 
        this.tablero = new Array(3); 
        for(fila of this.tablero){ 
            fila = new Array(3); 
            fila[0] = 0; 
            fila[1] = 0; 
            fila[2] = 0;
        } this.turnoJugador = 1; 
    }

}

