schchngr.error = {
  init: function () {
    if (window.reportError) {
      this.report();
    }
  },
  report: function () {
    schchngr.api.post('/error/report', {
      domain: window.location.hostname,
      pathname: window.location.pathname,
      referrer: document.referrer
    });
  }
};
