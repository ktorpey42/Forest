//Get current time
var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleTimeString();

//Store name from user
document.getElementById("result").innerHTML=localStorage.getItem("textvalue");


// Map code geolocation and shouwing nearby parks
//let map;
//let infowindow;

//let request;
//let service;
//let markers = [];

//function initMap() {
  //let location = new Object();
  //navigator.geolocation.getCurrentPosition(function(pos){
    //location.lat = pos.coords.latitude;
    //location.long = pos.coords.longitude;
    //map = new google.maps.Map(document.getElementById("map"), {
   //center: {lat: location.lat, lng: location.long},
   //zoom: 11
 //});
    //var pyrmont = new google.maps.LatLng(location.lat, location.long);
    //request = {
      //location: pyrmont,
    //  radius: '10000',
      //type: ['park']
  //  };
  //  infowindow = new google.maps.InfoWindow();
  //  service = new google.maps.places.PlacesService(map);
    //service.nearbySearch(request, callback);

  //  google.maps.event.addListener(map, 'click', function(event) {
      //  map.setCenter(event.latLng)
      //  clearResults(markers)

      //  var request = {
        //  location: event.latLng,
        //  radius: '10000',
        //    type: ['park']
      //  };
      //  service.nearbySearch(request, callback);
  //  })




//});
//}

//function callback(results, status) {
    //if(status == google.maps.places.PlacesServiceStatus.OK) {
      //  for (var i = 0; i < results.length; i++) {
        //   markers.push(createMarker(results[i]));
//  }
//}

//}

//function createMarker(place) {
  //var placeLoc = place.geometry.location;
        //var marker = new google.maps.Marker({
      //  map: map,
      //  position: place.geometry.location

  //  });


  //  google.maps.event.addListener(marker, 'click', function() {
  //    infowindow.setContent(place.name);
  //    infowindow.open(map, this);
  //  });

  //  return marker;
//}

//function clearResults(markers) {
  //  for (var m in markers) {
  //    markers[m].setMap(null)
//  }
  //  markers = []
//}

//Popup box

$(window).load(function () {
    $(".trigger_popup_fricc").click(function(){
      $('.hover_bkgr_fricc').show();
   });


    $('.hover_bkgr_fricc').click(function(){
        $('.hover_bkgr_fricc').hide();
    });
    $('.popupCloseButton').click(function(){
        $('.hover_bkgr_fricc').hide();
    });
});



//document.getElementbyClass("hover_bkgr_fricc").addEventListener("load", myFunction)

 //function myFunction() {
//   $('.hover_bkgr_fricc').show();
 //}
