// Get data from cities.js:
let cityData = cities;

// Create the map object with a center and zoom level:
// Create the map object with a center and zoom level:
let map = L.map("mapid", {
    center: [
        40.7, -94.5
    ],
    zoom: 4
});


// Coordinates for each point to be used in the polyline.
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
  ];

// We create the tile layer that will be the background of our map:
let streets = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// Then we add our "greymap" tile to the map:
streets.addTo(map);

// Create a polyline using the line coordinates and make the line red:
L.polyline(line, {
    color: "yellow"
}).addTo(map);
