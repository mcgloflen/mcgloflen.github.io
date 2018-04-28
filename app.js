$( document ).ready(function() {

  $(window).scroll(function() {
    if ($(this).scrollTop() > 400) {
        $('#apply').css({
            'display': 'none'
        });
        $('#apply-nav').css({
            'display': 'block'
        });
    } else if ($(this).scrollTop() < 400) {
        $('#apply').css({
            'display': 'block'
        });
        $('#apply-nav').css({
            'display': 'none'
        });
      }
  });

  // PURPLE BUTTONS ============

  $(".small-partner").hover(function(){
      $(this).css("border-color", "purple");
      $(this).css("background-color", "hsl(0, 0%, 4%)");
      $(this).css("color", "purple");
      }, function(){
      $(this).css("border-color", "white");
      $(this).css("color", "white");
      $(this).css("background-color", "hsl(0, 0%, 4%)");
  });

  // MODAL =============

  $(".mission").click(function(){
      $(".modal").addClass("is-active");
  });
  $(".modal-close").click(function(){
      $(".modal").removeClass("is-active");
  });
  $(".modal-background").click(function(){
      $(".modal").removeClass("is-active");
  });

  // FORM ===============

  $("#cancel").click(function(){
    document.getElementById("apply-form").reset();
  })

});
