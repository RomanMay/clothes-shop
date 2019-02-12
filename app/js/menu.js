(function($){
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('.menu').toggleClass("menu_state_open")

      if ($(".menu").hasClass("menu_state_open")) {
        $(".body").css("overflow", "hidden")
      }
      else {
         $(".body").css("overflow", "auto")
      }
      
    })
  })
})(jQuery);