var tmp = require("tmp");
var fs = require("fs");

describe("tmp", function () {
  describe("file", function () {
    it("should be defined", function () {
      expect(tmp.file).toBeDefined();
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
      beforeEach(function (done){
        this.input="42 is the reason for everything";
        var self=this;
        tmp.file(function(e, p, f, c) {
          self.error = e;
          self.path = p;
          self.fd = f;
          self.cleanup = c;
          done();
        });
      });
      it("should provide parameters", function () {
        expect(this.error).toBeNull();
        expect(typeof this.path === "string").toBeTruthy();
        expect(typeof this.fd === "number").toBeTruthy();
        expect(this.cleanup instanceof Function).toBeTruthy();
      });
      it("should create file at specified dir", function() {
        expect(fs.existsSync(this.path)).toBeTruthy();
        var buf;
        fs.openSync(this.path, "r", function(_, fd) {
          fs.readSync(fd, buf, 0, this.input.length, 0);
          expect(buf).toEqual(this.input);
        });
      });
      it("should delete file on cleanup call", function () {
        expect(fs.existsSync(this.path)).toBeTruthy();
        this.cleanup();
        expect(fs.existsSync(this.path)).toBeFalsy();

      });

    });
  });
});
