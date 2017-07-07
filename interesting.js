// Parallel Scroll faster
// $(window).scroll(function(){
//   var scrollTop = $(this).scrollTop();
//   $('.header').css('top', -(scrollTop * 2) + "px");
// });

// Hide and Show NavBar

$(document).ready(function() {
  "use strict";
  $(window).scroll(function(event) {
    /* Act on the event */
    "use strict";
    if ($(window).scrollTop() < 80) {
      // statement
      $(".navbar").css({
        "margin-top": "-100px",
        opacity: "0"
      });

      $(".navbar-default").css({
        "background-color": "rgba(59, 59, 59, 0)"
      });
    } else {
      $(".navbar").css({
        "margin-Top": "0",
        opacity: "1"
      });

      $(".navbar-default").css({
        "background-color": "rgba(59, 59, 59, 0.55)",
        "border-color": "skyblue"
      });

      $(".navbar-brand img").css({
        height: "35px",
        "padding-top": "0"
      });
    }
  });
});

$(".sentence").hover(
  function() {
    $(".header-text p").text("Best Phone You Ever Need!");
    $(".header-text p").css("color", "red");
  },
  function() {
    $(".header-text p").slideDown("slow", function() {
      $(".header-text p").text("Looking for Great Phone?");
      $(".header-text p").css("color", "skyblue");
    });
  }
);

$(".header-apple img").hover(
  function() {
    $(".sentence").html("<div><span>Iphone</span> is the Best!</div><br>");
  },
  function() {
    $(".sentence").html("<div><span>Iphone</span>, the only phone you ever need!</div>");
  }
);

// Add bx Slider to screens
$(document).ready(function() {
  $(".bxslider").bxSlider({
    slideWidth: 292.5,
    auto: true,
    minSlides: 1,
    maxSlides: 3,
    slideMargin: 50,
    speed: 888
  });
});

// Add Counter

$(document).ready(function() {
  $(".counter-num").counterUp({
    delay: 10,
    time: 2000
  });
});

// $(".purchase-now").hover(function() {
// 	/* Stuff to do when the mouse enters the element */
// 	$(".btn-purchase-now").addClass('newbtn');
// 	// $(".btn-purchase-now").attr('href', 'https://pearsonified.com/typography/');
// }, function() {
// 	/* Stuff to do when the mouse leaves the element */
// 	$(".btn-purchase-now").removeClass('newbtn');
// });

//  Wow.js


$(document).ready(function(){
  new WOW().init();
});
