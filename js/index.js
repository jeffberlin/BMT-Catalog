// OS detection
// if ( /Android|Opera Mini/i.test(navigator.userAgent) ) {
//   document.getElementById("selector").style.display = "block";
//   document.getElementById("alphaUL").style.display = "none";
// } else {
//   document.getElementById("selector").style.display = "none";
//   document.getElementById("alphaUL").style.display = "inline-flex";
// }
//
// if ( /iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
//   document.getElementById("selector").style.display = "block";
//   document.getElementById("alphaUL").style.display = "none";
// }






// Show the scrollTop button when user scrolls 50px down page, else hide
$(document).scroll(function() {
	var y = $(this).scrollTop();
	if (y >= 75) {
		$('#topcontrol').fadeIn();
	} else {
		$('#topcontrol').fadeOut();
	}
});

// JS for scrolling back to top of the page
$("#topcontrol").click(function() {
	$('html, body').animate({
		scrollTop: $("#primary").offset().top
	}, 'slow')
})

// Scroll to Letter selected
$("#digits").click(function() {
	$('html, body').animate({
		scrollTop: $("#digits-section").offset().top
	}, 'slow')
})
