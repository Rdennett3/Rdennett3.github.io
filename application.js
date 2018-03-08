/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "<-" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

$(window).scroll(function() {
  $('#reuManager, #accessibility, #misfit, #breakLeft').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+600) {
      $(this).addClass("slideRight");
    }
  });
});

$(window).scroll(function() {
  $('#animalFriends, #solid, #afflab, #breakRight').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+600) {
      $(this).addClass("slideLeft");
    }
  });
});

$(window).scroll(function() {
  $('#imagination, #about1, #work').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+600) {
      $(this).addClass("fadeIn");
    }
  });
});

$(document).ready(function() {
  $('#topRight').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+1000) {
      $(this).addClass("slideLeft2");
    }
  });
});

$(document).ready(function() {
  $('#topLeft').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+1000) {
      $(this).addClass("slideRight2");
    }
  });
});
