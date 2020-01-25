schchngr.api = {
  get: function (path, callback) {
    this._request('GET', path, null, callback);
  },
  post: function (path, data, callback) {
    this._request('POST', path, data, callback);
  },
  _request: function (method, path, data, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, 'https://api.schaechinger.com/1.0' + path);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function () {
      if (callback) {
        callback(200 === xhr.status ? JSON.parse(xhr.responseText) : false);
      }
    };
    xhr.send(data ? JSON.stringify(data) : null);
  }
};
