/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "<-" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

$(window).scroll(function() {
  $('#afflab,#pres').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+600) {
      $(this).addClass("slideRight");
    }
  });
});

$(window).scroll(function() {
  $('#petBG,#solid,#accessibility, #reu, #misfit, #affLab').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+600) {
      $(this).addClass("slideLeft");
    }
  });
});

$(window).scroll(function() {
  $('#pet,#solid, #reuman, .d3, #misfitDesc').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+600) {
      $(this).addClass("slideRight");
    }
  });
});

$(window).scroll(function() {
  $('#about1, #imagination, .hell').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+600) {
      $(this).addClass("fadeIn");
    }
  });
});

$(document).ready(function() {
  $('#bob').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+1000) {
      $(this).addClass("fadeIn");
    }
  });
});
