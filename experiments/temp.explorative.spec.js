var temp = require("temp");
var fs = require("fs");
var path = require("path");

function isSameInterface (obj1, obj2) {
  function collectInterface(obj) {
    var result = [],
        key;
    for (key in obj1) {
      result.push(key);
    }
    return result.sort().join(";");
  }
  return collectInterface(obj1) === collectInterface(obj2);
}

describe("temp", function () {
  describe("createWriteStream", function () {
    it("should be defined", function () {
      expect(temp.createWriteStream).toBeDefined();
    });
    describe("asyc testing", function () {
      var test=false;
      beforeEach(function(done) {
        setTimeout(function() {
          test=true;
          done();
        },1000);
      });
      it ("should evaluate only after timeout", function () {
        expect(test).toBeTruthy();
      });
    });
    describe("callback", function () {
      beforeEach(function (done) {
        this.path="c:\\karmaDemo";
        this.input="42 is the reason for everything";
        this.tempStream=temp.createWriteStream({dir: this.path, prefix: "remoteload", suffix: ".html"});
        this.tempStream.on("finish", done);
        this.tempStream.write(this.input);
        this.tempStream.end();
      });
      afterEach(function () {
      });
      it("should provide a writeable stream", function () {
        var fsStream = fs.createWriteStream("txt.txt");
        expect(isSameInterface(this.tempStream, fsStream)).toBeTruthy();
        expect(path.dirname(this.tempStream.path)).toEqual(this.path);
        fsStream.end();
      });
      it("should create file at specified dir", function() {
        expect(fs.existsSync(this.tempStream.path)).toBeTruthy();
        var buf;
        fs.openSync(this.tempStream.path, "r", function(_, fd) {
          fs.readSync(fd, buf, 0, this.input.length, 0);
          expect(buf).toEqual(this.input);
        });
      });
      it("should create file with prefix 'remoteload'", function() {
        expect(path.basename(this.tempStream.path)).toMatch(/^remoteload/);
      });
      it("should create file with suffix '.html'", function () {
        expect(path.basename(this.tempStream.path)).toMatch(/\.html$/);
      });
      xit("should delete file on cleanup call", function () {
        expect(fs.existsSync(this.path)).toBeTruthy();
        this.cleanup();
        expect(fs.existsSync(this.path)).toBeFalsy();

      });

    });
  });
});
