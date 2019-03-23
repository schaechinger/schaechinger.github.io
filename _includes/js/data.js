schchngr.data = {
  calcCoffees: function () {
    document.getElementsByClassName('calc-coffees')[0].innerHTML = this.calcDays(2.15);
  },
  setYear: function () {
    document.getElementsByClassName('copyright-year')[0].innerHTML = new Date().getFullYear();
  },
  calcDays: function (factor) {
    factor = factor || 1;
    var date = new Date();
    var first = new Date(date.getFullYear(), 0, 0);
    var diff = date - first;

    return Math.floor((diff / 86400000) * factor);
  }
};

