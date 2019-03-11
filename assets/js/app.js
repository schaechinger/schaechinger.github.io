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
        strokeColor: '#00a5db',
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

    if (link.getAttribute('href') && link.getAttribute('href').match(/:\/\//)) {
      link.setAttribute('target', '_blank');
    }
  }
}

function sendmail(button) {
  var domain = window.location.hostname;
  domain = domain.split('.')
    .splice(-2)
    .join('.');

  if (button.dataset) {
    window.location.href = 'mailto:' + button.dataset.address + '\u0040' + domain;
  }

  return false;
}

function calcDays(factor) {
  factor = factor || 1;
  var date = new Date();
  var first = new Date(date.getFullYear(), 0, 0);
  var diff = date - first;

  return Math.floor((diff / 86400000) * factor);
}

window.onload = function() {
  if (window.google) {
    initMaps();
  }

  checkLinks();

  if (window.calcCoffee) {
    document.getElementsByClassName('calc-coffees')[0].innerHTML = calcDays(2.15);
  }
}
