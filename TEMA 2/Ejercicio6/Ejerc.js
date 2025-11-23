let miDiv0 = document.getElementById("titulo");

function InfoNav0(){
    miDiv0.innerHTML = ("Explorador del BOM");
};

InfoNav0();





let miDiv = document.getElementById("info");

function InfoNav(){
    miDiv.innerHTML = ("<h2>Informacion del navegador</h2>"
        + "<br>" + "Navegador: " + navigator.userAgent 
        + "<br>" + "Idioma: " + navigator.language 
        + "<br>" + "Plataforma: "+ navigator.platform 
        + "<br>" + "Resolución: " + screen.width + " x " + screen.height);
};

InfoNav();

let miDiv2 = document.getElementById("nav");

function InfoNav2(){
    miDiv2.innerHTML = ("<h2>Navegación</h2>" + "<br>" + 
        "url actual: " + window.location.href);
};

InfoNav2();

function Redirigir(){
     location.href("https://www.google.com/?zx=1759322510277&no_sw_cr=1");
};

let miDiv3 = document.getElementById("pant");

function InfoNav3(){
    miDiv3.innerHTML = ("<h2>Información de la pantalla</h2>"
        + "<br>" + "Resolución total: " + screen.width+ " x " + screen.height
        + "<br>" + "Área disponible: " +  screen.availWidth+ " x " + screen.availHeight
        + "<br>" + "Profundidad color: " + screen.colorDepth
        + "<br>" + "Profundidad de píxel: " + screen.pixelDepth);
    };
InfoNav3();
