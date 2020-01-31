$(document).ready(function() {
  counter = 2;

  $(".next").click(function() {
    if (counter == 1) {
      $(".product1").fadeOut(500);
      $(".product2").fadeIn(500);
      $(".h1").animate({ top: "-30%" });
      $(".h2").animate({ top: "50%" });
      counter = 2;
    }
  });

  $(".pre").click(function() {
    if (counter == 2) {
      $(".product2").fadeOut(500);
      $(".product1").fadeIn(500);
      $(".h1").animate({ top: "50%" });
      $(".h2").animate({ top: "130%" });
      counter = 1;
    }
  });
  /************* */
  $(".product2 .c1").click(function() {
    $(".product2 .c2").css("box-shadow", "none");
    $(".product2 .c3").css("box-shadow", "none");
    $(".product2 .c1").css(
      "box-shadow",
      "0 0 0 2px #0D1F2D, 0 0 0 3.5px #CB3843"
    );
    $(".h2").animate({ opacity: 0 }, function() {
      $(".h2").attr("src", "img/black-mask-blue-logo.png");
    });
    $(".h2").animate({ opacity: 1 });
  });

  $(".product2 .c2").click(function() {
    $(".product2 .c1").css("box-shadow", "none");
    $(".product2 .c3").css("box-shadow", "none");
    $(".product2 .c2").css(
      "box-shadow",
      "0 0 0 2px #0D1F2D, 0 0 0 3.5px #CB3843"
    );
    $(".product2 .c4").css("box-shadow", "none");
    $(".h2").animate({ opacity: 0 }, function() {
      $(".h2").attr("src", "img/black-mask-red-logo.png");
    });
    $(".h2").animate({ opacity: 1 });
  });

  $(".product2 .c3").click(function() {
    $(".product2 .c1").css("box-shadow", "none");
    $(".product2 .c2").css("box-shadow", "none");
    $(".product2 .c3").css(
      "box-shadow",
      "0 0 0 2px #0D1F2D, 0 0 0 3.5px #CB3843"
    );
    $(".product2 .c4").css("box-shadow", "none");
    $(".h2").animate({ opacity: 0 }, function() {
      $(".h2").attr("src", "img/black-mask-pink-logo.png");
    });
    $(".h2").animate({ opacity: 1 });
  });

  $(".product2 .c4").click(function() {
    $(".product2 .c1").css("box-shadow", "none");
    $(".product2 .c2").css("box-shadow", "none");
    $(".product2 .c3").css("box-shadow", "none");
    $(".product2 .c4").css(
      "box-shadow",
      "0 0 0 2px #0D1F2D, 0 0 0 3.5px #CB3843"
    );
    $(".h2").animate({ opacity: 0 }, function() {
      $(".h2").attr("src", "img/black-mask-yellow-logo.png");
    });
    $(".h2").animate({ opacity: 1 });
  });

  /********************* */

  $(".product1 .c1").click(function() {
    $(".product1 .c2").css("box-shadow", "none");
    $(".product1 .c3").css("box-shadow", "none");
    $(".product1 .c1").css(
      "box-shadow",
      "0 0 0 2px #0D1F2D, 0 0 0 3.5px #CB3843"
    );
    $(".h1").animate({ opacity: 0 }, function() {
      $(".h1").attr("src", "img/white-mask-pink-logo.png");
    });
    $(".product1 .c4").css("box-shadow", "none");
    $(".h1").animate({ opacity: 1 });
  });

  $(".product1 .c2").click(function() {
    $(".product1 .c1").css("box-shadow", "none");
    $(".product1 .c3").css("box-shadow", "none");
    $(".product1 .c2").css(
      "box-shadow",
      "0 0 0 2px #0D1F2D, 0 0 0 3.5px #CB3843"
    );
    $(".product1 .c4").css("box-shadow", "none");
    $(".h1").animate({ opacity: 0 }, function() {
      $(".h1").attr("src", "img/white-mask-red-logo.png");
    });
    $(".h1").animate({ opacity: 1 });
  });
  $(".product1 .c3").click(function() {
    $(".product1 .c1").css("box-shadow", "none");
    $(".product1 .c2").css("box-shadow", "none");
    $(".product1 .c3").css(
      "box-shadow",
      "0 0 0 2px #0D1F2D, 0 0 0 3.5px #CB3843"
    );
    $(".product1 .c4").css("box-shadow", "none");
    $(".h1").animate({ opacity: 0 }, function() {
      $(".h1").attr("src", "img/white-mask-blue-logo.png");
    });
    $(".h1").animate({ opacity: 1 });
  });

  $(".product1 .c4").click(function() {
    $(".product1 .c1").css("box-shadow", "none");
    $(".product1 .c2").css("box-shadow", "none");
    $(".product1 .c3").css("box-shadow", "none");
    $(".product1 .c4").css(
      "box-shadow",
      "0 0 0 2px #0D1F2D, 0 0 0 3.5px #CB3843"
    );
    $(".h1").animate({ opacity: 0 }, function() {
      $(".h1").attr("src", "img/white-mask-yellow-logo.png");
    });
    $(".h1").animate({ opacity: 1 });
  });
});
