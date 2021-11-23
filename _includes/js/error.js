schchngr.error = {
  init: function () {
    if (window.encountered404Error) {
      this.report();
    }
  },
  report: function () {
    if ('localhost' !== window.location.hostname) {
      schchngr.api.post('/error/report', {
        domain: window.location.hostname,
        pathname: window.location.pathname,
        referrer: document.referrer
      });
    }
  }
};
