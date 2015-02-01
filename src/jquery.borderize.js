/**
 * this jquery extension is only here to be a stupid example of any jquery extension.
 * call jQuery(selector).borderize([optionalColor]) and see it blinking :)
 */
(function($, doc){
  $.fn.borderize = function(color) {
    color = color || "red";
    this.each(function(){
      var elem = this;
      var $elem = $(elem);
      var borderize = function() {
        if (jQuery.contains(doc, elem)) {
          $elem.css("border", "4px solid " + color);
          setTimeout(function(){
            $elem.css("border", "4px solid transparent");
            setTimeout(borderize, 250);
          }, 250);
        }
      };
      borderize();
      $("<a href='#' style='float:right;'>X</a>").appendTo(elem).click(function(){
        $elem.remove();
      });
    });
  };
  $.fn.aspect = window.aspect;
})(jQuery, document, window);

