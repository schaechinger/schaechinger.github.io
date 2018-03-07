function initMaps() {
  window.maps = window.maps || [];
  var drawLine = false;

  window.maps.forEach(function(locations, id) {
    var map = new google.maps.Map(document.getElementById('post-map-' + id), {
      mapTypeId: 'terrain'
    });
    var bounds = new google.maps.LatLngBounds();
    var path = [];

    locations.forEach(function(location, i) {
      var color = location.color || 'blue';
      var latLng = { lat: location.lat, lng: location.lng };
      path.push(latLng);

      var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        title: location.title || null,
        link: location.link || null,
        icon: 'https://maps.google.com/mapfiles/ms/icons/' + color + '-dot.png'
      });

      bounds.extend(latLng);
    });

    if (drawLine) {
      var line = new google.maps.Polyline({
        path: path,
        strokeColor: '#67b9c4',
        strokeOpacity: 1.0,
        strokeWeight: 2,
        map: map
      });
    }

    map.fitBounds(bounds);
  });
}

if (window.google) {
  initMaps();
}
