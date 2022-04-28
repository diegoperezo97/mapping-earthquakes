// Get data from cities.js:
let countriesData = countries;

// Create a map object
var myMap = L.map("map", {
  center: [15.5994, -28.6731],
  zoom: 3
});

// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// Loop through the countries array

  // Conditionals for countries points

  // Add circles to map


  // Adjust radius

countriesData.forEach(country => {
  var color = "";
  if(country.points >= 200) color = "blue";
  else if(country.points >= 150) color = "green";
  else if(country.points >= 100) color = "yellow";
  else color = "red";

  L.circle(country.location, {
    fillOpacity: 0.7,
    color: "white",
    fillColor: color,
    radius: country.points * 1500
  }).bindPopup(`<h1>${country.name}</h1> <hr> <h3>Points ${country.points}</h3>`)
  .addTo(myMap)
});