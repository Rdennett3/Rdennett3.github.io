// $(document).ready(function(){
// var controller = new ScrollMagic.Controller();
//
// var ourScene = new ScrollMagic.Scene({
//     triggerElement:'#one'
// })
// .setClassToggle('#kwcImg', 'fade-in')
// .addTo(controller);
//
// });


	$(window).scroll(function() {
		$('#two, #three, #four, #five, #six, #aboutText').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("slideUp");
			}
		});
	});
  // $(window).scroll(function() {
	// 	$('.aboutMe').each(function(){
	// 	var imagePos = $(this).offset().top;
  //
	// 	var topOfWindow = $(window).scrollTop();
	// 		if (imagePos < topOfWindow+900) {
	// 			$(this).addClass("slideUp");
	// 		}
	// 	});
	// });


function openNav() {
  document.getElementById("myNav").style.width = "60%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
