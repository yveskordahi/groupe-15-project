// Menu-toggle button

$(document).ready(function() {
  $(".menu-icon").on("click", function() {
    $("nav ul").toggleClass("showing");
  });
});

// Scrolling Effect

$(window).on("scroll", function() {
  if ($(window).scrollTop()) {
    $("nav").addClass("black");
  } else {
    $("nav").removeClass("black");
  }

  if ($(window).scrollTop()) {
    $(".menu--link").addClass("blue");
  } else {
    $(".menu--link").removeClass("blue");
  }
});

$(function() {
  $('nav a[href^="#"]').click(function() {
    var the_id = $(this).attr("href");
    if (the_id === "#") {
      return;
    }
    var posCible = $(the_id).offset().top - $("nav").height();
    $("html, body").animate(
      {
        scrollTop: $(the_id).offset().top
      },
      "slow"
    );
    return false;
  });

  $('.button-découvrir[href^="#"]').click(function() {
    var the_id = $(this).attr("href");
    if (the_id === "#") {
      return;
    }
    var posCible = $(the_id).offset().top - $("nav").height();
    $("html, body").animate(
      {
        scrollTop: $(the_id).offset().top
      },
      "slow"
    );
    return false;
  });
});
