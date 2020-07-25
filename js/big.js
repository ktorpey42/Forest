







// Initialize and add the map
//function myMap() {
  // The location of Uluru
  //var uluru = {lat: 53.312642, lng: -6.281301};
  // The map, centered at Uluru
//var map = new google.maps.Map(
    //  document.getElementById('googleMap'), {zoom: 13, center: uluru});
  // The marker, positioned at Uluru
//  var marker = new google.maps.Marker({position: uluru, map: map});
//}

// Add new map code with HTML 5 Geolocation

var map, infoWindow;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 13
  });
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


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleTimeString();


function showInput() {
    document.getElementById('display').innerHTML =
                document.getElementById("user_input").value;
    }


  var x = document.getElementById("demo");
