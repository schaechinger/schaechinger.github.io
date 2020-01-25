schchngr.data = {
  setYear: function () {
    document.getElementsByClassName('copyright-year')[0].innerHTML = new Date().getFullYear();
  },
  yearInFigures: function () {
    window.schchngr.api.get('/about/year-in-figures', function (data) {
      data.figures.forEach(function (figure) {
        var div = document.getElementsByClassName(figure.className)[0];
        div.querySelector('p').innerHTML = figure.count;
        div.querySelector('h3').innerHTML = figure.label;
      });
    });
  },
  calcDays: function (factor) {
    factor = factor || 1;
    var date = new Date();
    var first = new Date(date.getFullYear(), 0, 0);
    var diff = date - first;

    return Math.floor((diff / 86400000) * factor);
  }
};

