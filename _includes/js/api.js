schchngr.api = {
  post: function (path, data, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://api.schaechinger.com/1.0' + path);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function () {
      if (callback && 200 === xhr.status) {
        callback(JSON.parse(xhr.responseText));
      }
      else if (callback) {
        callback(false);
      }
    };
    xhr.send(JSON.stringify(data));
  }
};
