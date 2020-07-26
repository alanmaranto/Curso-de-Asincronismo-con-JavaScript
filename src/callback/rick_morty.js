let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function fetchData(url, cb) {
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", url, true);
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        cb(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error("Error " + url);
        return cb(error, null);
      }
    }
  };
  xhttp.send();
}
