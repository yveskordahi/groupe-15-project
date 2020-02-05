let blackMaskBlue = require("../img/black-mask-blue-logo.png");
let blackMaskRed = require("../img/black-mask-red-logo.png");
let blackMaskYellow = require("../img/black-mask-yellow-logo.png");
let blackMaskGreen = require("../img/black-mask-green-logo.png");
let blackMaskPink = require("../img/black-mask-pink-logo.png");

let WhiteMaskRed = require("../img/white-mask-red-logo.png");
let WhiteMaskBlue = require("../img/white-mask-blue-logo.png");
let WhiteMaskGreen = require("../img/white-mask-green-logo.png");
let WhiteMaskYellow = require("../img/white-mask-yellow-logo.png");
let WhiteMaskPink = require("../img/white-mask-pink-logo.png");

$(document).ready(function() {
  counter = 2;

  let h1 = document.querySelector(".tape");
  let input = document.querySelector("input");
  let blanc = document.getElementById("blanc");

  input.addEventListener("input", function() {
    h1.innerHTML = input.value;
  });

  $(".colorMask--variant-black").click(function() {
    if (counter == 1) {
      $(".row--maskImg-black").css("opacity", "1");
      $(".row--maskImg-white").css("opacity", "0");
      h1.style.color = "white";
      counter = 2;
    }
  });

  $(".colorMask--variant-white").click(function() {
    if (counter == 2) {
      $(".row--maskImg-black").css("opacity", "0");
      $(".row--maskImg-white").css("opacity", "1");
      h1.style.color = "black";
      counter = 1;
    }
  });

  $(".mask-black-product1 .color-1").click(function() {
    $(".row--maskImg-black").attr("src", blackMaskBlue);
  });

  $(".mask-black-product1 .color-2").click(function() {
    $(".row--maskImg-black").attr("src", blackMaskRed);
  });

  $(".mask-black-product1 .color-3").click(function() {
    $(".row--maskImg-black").attr("src", blackMaskYellow);
  });

  $(".mask-black-product1 .color-4").click(function() {
    $(".row--maskImg-black").attr("src",blackMaskGreen);
  });

  $(".mask-black-product1 .color-5").click(function() {
    $(".row--maskImg-black").attr("src", blackMaskPink);
  });

  // -------------------White--------------------

  $(".mask-black-product1 .color-1").click(function() {
    $(".row--maskImg-white").attr("src", WhiteMaskBlue);
  });

  $(".mask-black-product1 .color-2").click(function() {
    $(".row--maskImg-white").attr("src", WhiteMaskRed);
  });

  $(".mask-black-product1 .color-3").click(function() {
    $(".row--maskImg-white").attr("src", WhiteMaskYellow);
  });

  $(".mask-black-product1 .color-4").click(function() {
    $(".row--maskImg-white").attr("src", WhiteMaskGreen);
  });

  $(".mask-black-product1 .color-5").click(function() {
    $(".row--maskImg-white").attr("src", WhiteMaskPink);
  });
});
