var schchngr = {};

{% include js/api.js %}
{% include js/consent.js %}
{% include js/checklinks.js %}
{% include js/sendmail.js %}
{% include js/cookie.js %}
{% include js/ga.js %}
{% include js/error.js %}
{% include js/availability.js %}
{% include js/data.js %}

schchngr.init = function () {
  this.checkLinks();
  this.consent.check();
  this.error.init();
  this.ga.init();
  this.ga.activate();
};

schchngr.init = schchngr.init.bind(schchngr);

window.schchngr = schchngr;
window.sendmail = window.schchngr.sendmail;
window.onload = schchngr.init;

window.procStorage.push('set-year');

window.procStorage.forEach(function (doing) {
  switch (doing) {
    case 'availability':
      window.schchngr.availability.show();
      break;

    case 'calc-coffees':
      window.schchngr.data.calcCoffees();
      break;

    case 'calc-age':
      window.schchngr.data.calcAge();
      break;

    case 'set-year':
      window.schchngr.data.setYear();
      break;
  }
});
