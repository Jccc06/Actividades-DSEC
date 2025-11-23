let intentos = 10;

window.onload = () => {
    let A = document.getElementById("A");
    let B = document.getElementById("B");
    let C = document.getElementById("C");
    let D = document.getElementById("D");
    let E = document.getElementById("E");
    let F = document.getElementById("F");
    let G = document.getElementById("G");
    let H = document.getElementById("H");
    let I = document.getElementById("I");
    let J = document.getElementById("J");
    let K = document.getElementById("K");
    let L = document.getElementById("L");
    let M = document.getElementById("M");
    let N = document.getElementById("N");
    let O = document.getElementById("O");
    let P = document.getElementById("P");
    let Q = document.getElementById("Q");
    let R = document.getElementById("R");
    let S = document.getElementById("S");
    let T = document.getElementById("T");
    let U = document.getElementById("U");
    let V = document.getElementById("V");
    let W = document.getElementById("W");
    let X = document.getElementById("X");
    let Y = document.getElementById("Y");
    let Z = document.getElementById("Z");

    let palabra = ["_", "_", "_", "_", "_", "_", "_"];
    let adivina = document.getElementById("palabra"); ;
    let incorrecto = document.getElementById("incorrecto");
    let correcto = "";
    let ganar = document.getElementById("correcto");
    let perder = document.getElementById("pierdes");
    
    function mostrar() {
        adivina.innerHTML = palabra[0] + " " + palabra[1] + " " + palabra[2] + " " + palabra[3] + " " + palabra[4] + " " + palabra[5] + " " + palabra[6];
        correcto = palabra[0] + palabra[1] + palabra[2] + palabra[3] + palabra[4] + palabra[5] + palabra[6];
        if(correcto.toLowerCase() === "granada")
            ganar.innerHTML = "Has ganado!";
    }

    mostrar(); // Mostrar al inicio

    function fallo() {
        intentos--;
        perder.innerHTML = "Intentos restantes: " + intentos;
        if(intentos<0)
            perder.innerHTML = "Has perdido";
        else
            incorrecto.innerHTML = "Has fallado";
    }
   

    // ---- LETRAS CORRECTAS ----
    G.addEventListener("click", () => {
        palabra[0] = "G";
        mostrar();
        incorrecto.innerHTML = "Correcto!";
    })

    R.addEventListener("click", () => {
        palabra[1] = "R";
        mostrar();
        incorrecto.innerHTML = "Correcto!";
    })

    A.addEventListener("click",() => {
        palabra[2] = "A";
        palabra[4] = "A";
        palabra[6] = "A";
        mostrar();
        incorrecto.innerHTML = "Correcto!";
    })

    N.addEventListener("click", () => {
        palabra[3] = "N";
        mostrar();
        incorrecto.innerHTML = "Correcto!";
    })

    D.addEventListener("click", () => {
        palabra[5] = "D";
        mostrar();
        incorrecto.innerHTML = "Correcto!";
    })


    // ---- LETRAS INCORRECTAS ----
    B.addEventListener("click", fallo);
    C.addEventListener("click", fallo);
    E.addEventListener("click", fallo);
    F.addEventListener("click", fallo);
    H.addEventListener("click", fallo);
    I.addEventListener("click", fallo);
    J.addEventListener("click", fallo);
    K.addEventListener("click", fallo);
    L.addEventListener("click", fallo);
    M.addEventListener("click", fallo);
    O.addEventListener("click", fallo);
    P.addEventListener("click", fallo);
    Q.addEventListener("click", fallo);
    S.addEventListener("click", fallo);
    T.addEventListener("click", fallo);
    U.addEventListener("click", fallo);
    V.addEventListener("click", fallo);
    W.addEventListener("click", fallo);
    X.addEventListener("click", fallo);
    Y.addEventListener("click", fallo);
    Z.addEventListener("click", fallo);
}




 