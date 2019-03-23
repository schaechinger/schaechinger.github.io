schchngr.ga = {
  cookieString: null,
  id: '{{ site.ga }}',
  init: function () {
    this.cookieString = 'ga-disable-' + this.id;

    return window.schchngr.cookie.check(this.cookieString);
  },
  activate: function () {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };

    if ('localhost' !== window.location.hostname) {
      window.gtag('js', new Date());
      window.gtag('config', this.id, { 'anonymize_ip': true });
    }
  },
  optOut: function () {
    document.cookie = this.cookieString + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
    window[this.cookieString] = true;
  }
};

schchngr.ga.optOut = schchngr.ga.optOut.bind(schchngr.ga);
