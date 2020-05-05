function openNav() {
  document.getElementById("myNav").style.width = "60%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


$(window).scroll(function() {
  $('#newImg').each(function(){
  var imagePos = $(this).offset().top;

  var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+400) {
      $(this).addClass("fade");
    }
  });
});

$(window).scroll(function() {
  $('#slideLeftText').each(function(){
  var imagePos = $(this).offset().top;

  var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+400) {
      $(this).addClass("slideLeft");
    }
  });
});

$(window).scroll(function() {
  $('#one, #two, #three, #four, #five, #six').each(function(){
  var imagePos = $(this).offset().top;

  var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+400) {
      $(this).addClass("slideUP");
    }
  });
});

// VEGAS SLIDESHOW
$(function() {
  $('.heroInnerRight').vegas({
    duration: 20000,
    firstTransition: 'zoomOut',
    transitionDuration:3000,
    delay: 5000,
    slides: [
      { src: 'images/lajolla.jpg'},
      { src: 'images/huntington.jpg'},
      {src: 'images/buddha.jpg'},
      {src: 'images/td-garden.jpg'}
    ],
    transition:'zoomOut'
  });
});


// $(function() {
//   $.scrollify({
//     section : ".workSection",
//     sectionName : "section-name",
//     interstitialSection : "",
//     easing: "easeOutExpo",
//     scrollSpeed: 100,
//     offset : 0,
//     scrollbars: true,
//     standardScrollElements: "",
//     setHeights: true,
//     overflowScroll: true,
//     updateHash: true,
//     touchScroll:true,
//     before:function() {},
//     after:function() {},
//     afterResize:function() {},
//     afterRender:function() {}
//   });
// });
