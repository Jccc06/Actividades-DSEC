//8 polilinea
    let ruta =[];
    var polyline;
    var marker;
    var map;
    function succes(pos){
        const lat = pos.coords.latitude;
        const long = pos.coords.longitude;
        ruta.push([lat,long]);
        if(ruta.length == 1){
            map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 19);

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);

            marker = L.marker([pos.coords.latitude, pos.coords.longitude]).addTo(map);
            polyline = L.polyline(ruta).addTo(map)
        }
        else{
            map.setView([lat,long],15);
            marker.setLatLng([lat,long]);
            polyline.setLatLngs(ruta);
        };
    };

    navigator.geolocation.watchPosition(succes);

    var circle = L.circle([posicion.coords.latitude, posicion.coords.longitude], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
    radius: 250
    }).addTo(map);