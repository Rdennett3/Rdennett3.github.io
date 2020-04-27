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
		$('#one, #two, #three, #four, #five, #six').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+300) {
				$(this).addClass("slideUp");
			}
		});
	});


function openNav() {
  document.getElementById("myNav").style.width = "60%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
