var request = require("request");
var http = require("http");
describe("request", function() {
  beforeEach(function () {
    var self = this;
    self.server = http.createServer(function (req, response) {
      var out = "<h1>hello world</h1>";
      response.writeHead(200, {"Content-Type": "text/html"});
      response.end(out);
    });
    self.server.listen(8080);
  });
  afterEach(function() {
    this.server.close();
  });
  it("should successfully read from the server", function (done) {
    request.get("http://localhost:8080")
      .on("response", function (response) {
        expect(response.statusCode).toBe(200);
        expect(response.headers["content-type"]).toEqual("text/html");
        done();
      });
  });
  it("should read content", function() {
    request("http://localhost:8080", function (_, resp, body) {
      expect(body).toEqual("<h1>hello world</h1>");
    });
  });
});
