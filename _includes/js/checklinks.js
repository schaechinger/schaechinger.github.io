schchngr.checkLinks = function () {
  var links = document.getElementsByTagName('a');

  for (var i = 0; links.length > i; i++) {
    var link = links[i];

    if (link.getAttribute('href') && link.getAttribute('href').match(/:\/\//)) {
      link.setAttribute('target', '_blank');
    }
  }
};
