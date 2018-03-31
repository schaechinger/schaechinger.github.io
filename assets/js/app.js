function initMaps() {
  window.maps = window.maps || [];
  window.mapTypes = window.mapTypes || [];

  window.maps.forEach(function(locations, id) {
    var map = new google.maps.Map(document.getElementById('post-map-' + id), {
      mapTypeId: 'terrain'
    });
    var bounds = new google.maps.LatLngBounds();
    var drawTrack = 'track' === window.mapTypes[id];
    var path = [];

    locations.forEach(function(location, i) {
      var color = location.color || 'blue';
      var latLng = { lat: location.lat, lng: location.lng };

      if (drawTrack) {
        path.push(latLng);
      }
      else {
        new google.maps.Marker({
          position: latLng,
          map: map,
          title: location.title || null,
          link: location.link || null,
          icon: 'https://maps.google.com/mapfiles/ms/icons/' + color + '-dot.png'
        });
      }

      bounds.extend(latLng);
    });

    if (drawTrack) {
      new google.maps.Polyline({
        path: path,
        strokeColor: '#67b9c4',
        strokeOpacity: 1.0,
        strokeWeight: 4,
        map: map
      });
    }

    map.fitBounds(bounds);
  });
}

function checkLinks() {
  var links = document.getElementsByTagName('a');

  for (var i = 0; links.length > i; i++) {
    var link = links[i];

    if (link.getAttribute('href').match(/:\/\//)) {
      link.setAttribute('target', '_blank');
    }
  }
}

window.onload = function() {
  if (window.google) {
    initMaps();
  }

  checkLinks();
}
