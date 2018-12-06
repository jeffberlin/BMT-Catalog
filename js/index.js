// Show the scrollTop button when user scrolls 50px down page, else hide
$(document).scroll(function() {
	var y = $(this).scrollTop();
	if (y >= 75) {
		$('#topcontrol').fadeIn();
	} else {
		$('#topcontrol').fadeOut();
	}
});

const menu = $("li.dropdown");
menu.on("mouseenter mouseleave", () => {
  menu.toggleClass("open");
});

// JS for scrolling back to top of the page
$("#topcontrol").click(function() {
	$('html, body').animate({
		scrollTop: $("#primary").offset().top
	}, 'slow')
})

$("#compare").click(function() {
	$("#tier-content").toggle();
	$("#table").toggle();
	$("#scroll-text").toggle();
	$("#back").toggle();
	$("#compare").toggle();
});

$("#back").click(function() {
	$("#tier-content").toggle();
	$("#table").toggle();
	$("#scroll-text").toggle();
	$("#back").toggle();
	$("#compare").toggle();
});

// $("#compare").click(function() {
// 	$("#tier-content").html($("#table").html());
// 	$("#scroll-text").hide();
// 	$("#compare").hide();
// 	$("#back").show();
// });
//
// $("#back").click(function() {
// 	$("#table").html($("#tier-content").html());
// 	$("#scroll-text").show();
// 	$("#back").hide();
// 	$("#compare").show();
// });
