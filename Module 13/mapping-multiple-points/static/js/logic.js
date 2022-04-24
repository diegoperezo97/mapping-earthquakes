// Get data from cities.js:
let cityData = cities;

// Create the map object with a center and zoom level:
let map = L.map("mapid", {
    center: [
        40.7, -94.5
    ],
    zoom: 4
});

// We create the tile layer that will be the background of our map:
let streets = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// Then we add our "greymap" tile to the map:
streets.addTo(map);

// Loop through the cities array and create one market for each city:
cities.forEach(function (cityData) {
    L.circleMarker(cityData.location, {
        radius: cityData.population / 100000,
        color: "orange",
        fillColor: "ffdfbf"
    })
        .bindPopup("<h2>" + cityData.city + ", " + cityData.state + "</h2> <hr> <h3>Population " + cityData.population.toLocaleString() + "</h3>")
        .addTo(map);
});