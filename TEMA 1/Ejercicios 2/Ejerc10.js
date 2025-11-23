let nota = prompt("Dime tu nota (A, B, C, D, F): ");
switch(nota) {
    case "A":
        alert("Excelente");
    break;
    case "B":
        alert("Muy bien");
    break;
    case "C":
        alert("Bien");
    break;
    case "D":
        alert("Suficiente");
    break;
    case "F":
        alert("Reprobado");
    break;
    default:
        alert("Opción no valida");
};