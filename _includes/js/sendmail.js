schchngr.sendmail = function (button) {
  var domain = window.location.hostname.split('.').splice(-2).join('.');

  if (button.dataset) {
    window.location.href = 'mailto:' + button.dataset.address + '\u0040' + domain;
  }

  return false;
};
