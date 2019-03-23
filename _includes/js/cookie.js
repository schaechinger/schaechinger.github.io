schchngr.cookie = {
  check: function (cookieString) {
    if (0 <= document.cookie.indexOf(cookieString + '=')) {
      window[cookieString] = true;
    }

    return !!window[cookieString];
  }
};