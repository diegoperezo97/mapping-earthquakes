// Create the map object with a center and zoom level:
let map = L.map("mapid").setView([30, 30], 2);

// We create the tile layer that will be the background of our map:
let streets = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// Then we add our "greymap" tile to the map:
streets.addTo(map);

// Accessing the airport GeoJSON URL:
let airportData = "https://raw.githubusercontent.com/diegoperezo97/mapping-earthquakes/main/Module%2013/majorAirports.json"

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
    console.log(data);
  
    // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data).addTo(map);
});