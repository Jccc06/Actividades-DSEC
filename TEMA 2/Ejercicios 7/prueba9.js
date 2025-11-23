//9 Fuera o dentro del circulo
    let ruta =[];
    var polyline;
    var marker;
    var map;
    var circle;
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
            
            circle = L.circle([pos.coords.latitude, pos.coords.longitude], {
                color: 'red',
                fillColor: '#f03',
                fillOpacity: 0.5,
                radius: 250
             }).addTo(map);
     }
        else{
            map.setView([lat,long],15);
            marker.setLatLng([lat,long]);
            polyline.setLatLngs(ruta);
            const distance = map.distance([lat, long], circle.getLatLng());
            if(distance > circle.getRadius()){
                console.log("Estas saliendo del circulo");
            } else {
                console.log("Estas dentro del circulo");
            }
        };
    };

    navigator.geolocation.watchPosition(succes);


    

        
     


