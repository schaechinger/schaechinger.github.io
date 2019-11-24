schchngr.consent = {
  cookieString: 'SCHCHNGR-CONSENT',
  check: function () {
    var accepted = window.schchngr.cookie.check(this.cookieString);

    if (!accepted) {
      document.getElementById("consent").classList.add('consent--pending');
    }

    return accepted;
  },
  accept: function () {
    var date = new Date();
    date.setYear(date.getFullYear() + 10);
    date.setDate(date.getDate() - 1);
    var value = 'YES+de+' + new Date().toISOString() + '+1';
    document.cookie = this.cookieString + '=' + value + '; expires=' + date.toUTCString() + '; path=/';
    document.getElementById("consent").classList.add('consent--fade-out');
    window[this.cookieString] = true;

    return false;
  }
};

schchngr.consent.accept = schchngr.consent.accept.bind(schchngr.consent);
