// Get data from cities.js:
let sanFranGeoJSON = sanFranAirport;

// Create the map object with a center and zoom level:
let map = L.map("mapid", {
    center: [
        37.5, -122.5
    ],
    zoom: 10
});

// GeoJSON objects are added to the map through a GeoJSON layer, L.geoJSON():
L.geoJSON(sanFranAirport, {
    // We turn each feature into a market on the map:
    pointToLayer: function(feature, latlng){
        console.log(feature);
        return L.marker(latlng)
        .bindPopup("<h2>" + feature.properties.name + "</h2> <hr> <h3>" + feature.properties.city + ", " + feature.properties.country)
    }
}).addTo(map);

// We create the tile layer that will be the background of our map:
let streets = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// Then we add our "greymap" tile to the map:
streets.addTo(map);

// Grabbing our GeoJSON data:
L.geoJSON(sanFranAirport, {
    onEachFeature: function(feature, layer){
        console.log(layer);
        layer.bindPopup();
    }
}).addTo(map)