let miDiv = document.getElementById("Reloj");

function intervalo(){
    let horaactual = new Date();
    miDiv.innerHTML = ("⏰RELOJ DIGITAL" + "<br>" +horaactual.getHours() + " : " + horaactual.getMinutes() + " : " + 
    horaactual.getSeconds() + "<br>" + new Intl.DateTimeFormat("es-ES").format(horaactual));
};

intervalo();
setInterval(intervalo,1000);

