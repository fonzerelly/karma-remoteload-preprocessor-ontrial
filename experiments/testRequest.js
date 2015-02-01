(function () {
var request = require("request");

function readHttp(url) {
  request(url, function (error, response, body) {
    if (!error && response.statusCode ===  200) {
      console.log(body);
      return body;
    }
    throw error;
  });
}

console.log(readHttp("http://localhost:8080"));
}());
