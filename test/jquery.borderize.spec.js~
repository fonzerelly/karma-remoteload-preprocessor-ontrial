jasmine.getFixtures().fixturesPath = 'loc';
describe("jquery.js.test.borderize", function () {
    var $Obj, restoreCss;
    beforeEach(function () {
        restoreCss = jQuery.fn.css;
        jQuery.fn.css = jQuery.fn.data;
        // jQuery.fn.css = function (key, value) {
        //   console.log("in css", key, value);
        //   return jQuery.fn.data(key, value);
        // };
        //console.log(window.__html__);
        //loadFixtures("http://localhost:8080");
        //(function(resource) {console.log(resource);setFixtures(window.__html__[resource]);}('fixtures/index.html'));
        setFixtures(window.__html__['fixtures/index.html']);
        $Obj = jQuery('div.testdummy');
    });

    afterEach(function () {
        jQuery.fn.css = restoreCss;
        restoreCss = undefined;
        $Obj = undefined;
    });

    describe("initialization", function () {
        it("should extend jQuery-Objects by a borderize-function", function () {
            expect($Obj.borderize).not.toBeUndefined();
            expect($Obj.borderize instanceof Function).toBeTruthy();
        });
    });

     describe("asynchronous evaluation", function () {
        var myColor = "blue",
            border = "4px solid " + myColor,
            noBorder = "4px solid transparent";

        beforeEach(function () {
          jasmine.clock().install();
        });

        afterEach(function() {
          jasmine.clock().uninstall();
        });

        it("should set a DOM-Elements border", function () {
          $Obj.borderize(myColor);
          expect($Obj.css("border")).toEqual(border);
          jasmine.clock().tick(251);
          expect($Obj.css("border")).toEqual(noBorder);
        });
     });
});
