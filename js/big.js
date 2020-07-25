// Add new map code with HTML 5 Geolocation

var map;
var infoWindow;

function initialize() {
  var center = new google.maps.LatLng(-34.397, 150.644)
  map = new google.maps.Map(document.getElementById('map'), {
    center: center,
    zoom: 13
  });
// Insert places code
  var request = {
    location: center,
    radius: 8047,
    types: ['cafe']
  };
      infoWindow = new google.maps.InfoWindow();

      var service = new google.maps.places.PlacesService(map);

      service.nearbySearch(request, callback);
}
// Insert places code end



  // Try HTML5 geolocation.


function callback(results, status) {
    if(status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
           createMarker(results[i]);
        }
    }

}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });
}

//google.maps.event.addDomListener(window, 'load', initialize);
// Additional code for showing places on Google maps








var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleTimeString();
