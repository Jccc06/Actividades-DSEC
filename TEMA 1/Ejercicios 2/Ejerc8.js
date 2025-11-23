let semaforo = prompt("Dime un color de semaforo (rojo - amarillo - verde): ");
switch(semaforo) {
    case "rojo":
        alert("Alto");
    break;
    case "amarillo":
        alert("precaución");
    break;
    case "verde":
        alert("avanza");
    break;
    default:
        alert("Opción no valida");
};