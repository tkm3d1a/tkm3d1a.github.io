//credit: https://developers.google.com/maps/documentation/javascript/adding-a-google-map#maps_add_map-javascript

// Initialize and add the map
function initMap() {
  // The location of...
  // Currently: Hoboken, NJ
  const pointerLoc = { lat: 40.7452, lng: -74.0347 };
  // The map, centered at pointerLoc
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: pointerLoc,
  });
  // The marker, positioned at pointerLoc
  const marker = new google.maps.Marker({
    position: pointerLoc,
    map: map,
  });
}

window.initMap = initMap;
