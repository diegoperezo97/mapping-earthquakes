// Create the map object with a center and zoom level:
let map = L.map("mapid").setView([34.0522, -118.2437], 14);

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

// Adding a marker to our simple map with the latitude and longitude for Los Angeles, California:
let marker = L.marker([34.0522, -118.2437]).addTo(map);

// Adding a circle to the map changing the marker on our map to a point or dot, using the circle() function:
L.circle([34.0522, -118.2437], {
    radius: 100
}).addTo(map)

// Alternatively, we can create a circle using the circleMarker() function. 
// The circleMarker() function measures the radius of the circle in pixels, with the default radius set at 10 pixels. 
// The syntax for using the circleMarker() function follows:
// L.circleMarker([34.0522, -118.2437]).addTo(map);

// Adding a light-yellow circle with black lines indicating a 300-pixel radius on a dark map using the circle Marker function:
L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color: "black",
    fillColor: "ffffa1"
}).addTo(map);