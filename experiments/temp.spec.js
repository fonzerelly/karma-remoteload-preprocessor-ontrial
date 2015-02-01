var temp = require("temp");

describe("temp", function () {
  describe("file", function () {
    it("should be defined", function () {
      expect(temp.file).toBeDefined();
    });
  });
});
