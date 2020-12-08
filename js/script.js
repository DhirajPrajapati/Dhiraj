$(window).on("load",function(){
  $(".loader").fadeOut("slow");
});
$(document).ready(function () {
  // ! Navbar

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 30) {
      $("nav").css("background", "white");
      $(".navbar-brand").css("color", "black");
      $("ul li a").css("color", "black");
      $("nav").css("height", "70px");
      $(".back-to-top").fadeIn();
    } else {
      $("nav").css("background", "transparent");
      $(".navbar-brand").css("color", "white");
      $("ul li a").css("color", "white");
      $("nav").css("height", "90px");
      $(".back-to-top").fadeOut();
    }
  });

  // ! Materialize Effect

  $(".materialboxed").materialbox();
  $(".tooltipped").tooltip();

  // ! Type Writer Effect

  var typed = new Typed(".typing", {
    strings: ["a Web Developer.", "a Hardware Technician."],
    smartBackspace: true, // Default value
    typeSpeed: 90,
    backSpeed: 60,
    loop: true,
  });

});
