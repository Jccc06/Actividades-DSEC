let edad = Number(prompt("Ingrese su edad"));
let permiso = prompt("¿Tiene permiso de sus padres? (sí/no)");
// Usa un condicional con && para determinar si puede entrar
if(edad == 18 && permiso.toLowerCase() == "si"){
    alert("Tiene permiso");
}
else{
    alert("No tiene permiso");
};

let matematicas = prompt("¿Aprobó matemáticas? (sí/no)");
let fisica = prompt("¿Aprobó física? (sí/no)");
let quimica = prompt("¿Aprobó química? (sí/no)");
// Usa un condicional con || para determinar si pasa al siguiente nivel
if(matematicas == "no" && fisica == "no" && quimica == "no"){
    alert("No pasa");
}
else{
    if(matematicas == "si" || fisica == "si" || quimica == "si"){   
        alert("Si pasa");
    }
};

let contraseña = prompt("Ingrese la contraseña");
// Usa ! para comprobar si no es correcta
if(contraseña != "holamundo"){
    alert("Contraseña incorrecta");
}
else{
    if(contraseña == "holamundo"){
        alert("Contraseña correcta");
    }
    else{
        alert("Contraseña incorrecta");
    }
}

let numero = Number(prompt("Ingrese un número"));
// Usa && para verificar el rango
if(numero >= 10 && numero <= 50){
    alert("El numero está en el rango");
}
else{
    alert("El numero no está en el rango");
}

let edad2 = Number(prompt("Ingrese su edad"));
let tutor = prompt("¿Tiene tutor presente? (sí/no)");
// Usa && y || según corresponda
if(edad2 < 18 && tutor == "no"){
    alert("No puede pasar");
}
else{
    if(edad2 >= 18 || tutor == "si"){
        alert("Puede pasar");
    }
};

let usuario = prompt("Ingrese su usuario");
let contraseña2 = prompt("Ingrese su contraseña");
// Condicional usando && y ||
if(usuario == "admin" && contraseña2 == 1234 || usuario == "invitado"){
    alert("Acceso correcto");
}
else{
    alert("Acceso incorrecto");
}

let numero3 = Number(prompt("Ingrese un número"));
// Usa operadores lógicos para evaluar ambas condiciones
if(numero3 < 100 && numero3 > 0){
    alert(numero3 + " es positivo y menor que 100");
}
else{
    if(numero3 < 0){
        alert(numero3 + " es negativo y menor que 100");
    }
};

let dia = prompt("Ingrese un día de la semana").toLowerCase();
// Usa || para comparar con lunes, martes, miércoles, jueves, viernes
if(dia == "lunes" || dia == "martes" || dia == "miercoles" || dia == "jueves" || dia == "viernes"){
    alert("Es dia laboral");
}
else{
    alert("No es un dia laboral");
};

let edad5 = Number(prompt("Ingrese su edad"));
let nacionalidad = prompt("Ingrese su nacionalidad");
// Usa && y >= para verificar la condición

if(edad5 >= 18 && nacionalidad =="España"){
    alert("Puede votar");
}
else{
    alert("No puede votar");
};



let usuario2, contraseña3;

while (usuario2 != "admin" && contraseña3 != "1234") {
    usuario2 = prompt("Usuario:");
    contraseña3 = prompt("Contraseña:");
    // Mensaje de error si no es correcto
    if(usuario2 != "admin" && contraseña3 != "1234"){
        alert("Datos incorrectos.");
    };
};
alert("¡Acceso permitido!");