if (WURFL.is_mobile === true && WURFL.form_factor === "Smartphone") {
	document.getElementById("alphaUL").style.display = "none";
	document.getElementById("selector").style.display = "block";
} else {
	document.getElementById("alphaUL").style.display = "inline-flex";
	document.getElementById("selector").style.display = "none";
}

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
