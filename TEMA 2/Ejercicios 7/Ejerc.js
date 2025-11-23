function obtenerPosicion(posicion){
    console.log(posicion.coords.latitude, posicion.coords.longitude)

    var map = L.map('map').setView([posicion.coords.latitude, posicion.coords.longitude], 19);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
        var marker = L.marker([posicion.coords.latitude, posicion.coords.longitude]).addTo(map);
        var circle = L.circle([posicion.coords.latitude, posicion.coords.longitude], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
    radius: 250
    }).addTo(map);



   

};

if(navigator.geolocation){
    navigator.geolocation.watchPosition();
}
else{
    console.log("No se puede encontrar la posicion");
};




//navigator.geolocation.watchPosition();

/*
//1 y 3. Obtener tu ubicación actual con control de errores
function mostrarUbicacion(position) {
  console.log("Latitud: " + position.coords.latitude);
  console.log("Longitud: " + position.coords.longitude);
  console.log("Precisión: "+position.coords.accuracy);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  var marker = L.marker([37.196426285144774, -3.601333984556435]).addTo(map);
  L.Routing.control({
      waypoints: [
          L.latLng(37.196426285144774, -3.601333984556435), // Punto de inicio
          L.latLng(40.7128,-74.0060)  // Punto de fin
      ],
      language: 'es'
  }).addTo(mymap);
  }

function mostrarError(error) {
  console.log("Error al obtener la ubicación: " + error.message);
}

// Comprueba si el navegador soporta la API de geolocalización
if (navigator.geolocation) {
  // Obtiene la posición actual del usuario
  navigator.geolocation.getCurrentPosition(mostrarUbicacion, mostrarError);
} else {
  console.log("Tu navegador no soporta la geolocalización.");
}

//2. Mostrar la ubicación en la página
let miParrafo = document.getElementById("ubicacion");
if(navigator.geolocation){
miParrafo.innerHTML=(navigator.geolocation.getCurrentPosition(mostrarUbicacion, mostrarError));
}

//4. Actualizar ubicacion en tiempo real

if(navigator.geolocation){
  navigator.geolocation.watchPosition(mostrarUbicacion, mostrarError);
}else
  console.log("Tu navegador no soprta la geolocalización");

*/
// Integración con Google Maps o Leaflet


/*
//6. Mostrar precisión de la ubicación position.coords.acurracy
console.log("Precision: " + pos.coords.accuracy);
//7. Calcular la distancia entre dos ubicaciones
let madrid = [40.42111161415836, -3.6925986781184466];
let ubiact = [37.1814861892225, -3.595392653564267];

 console.log("Distancia entre 2 ubicaciones" + map.distance(madrid,ubiact));

console.log("La distancia entre los dos puntos es de: "+calcularDistancia(40.7128,-74.0060,34.0522,-118.2437))+" km";
*/

