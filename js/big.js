// Add new map code with HTML 5 Geolocation

var map, infoWindow;
function initMap() {
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

      var service = new google.maps.places.PlacesService(map);

      service.nearbySearch(request, callback);

// Insert places code end

  infoWindow = new google.maps.InfoWindow;

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      infoWindow.open(map);
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}


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

// Additional code for showing places on Google maps








var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleTimeString();
