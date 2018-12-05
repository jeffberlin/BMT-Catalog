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

// _e('compare').addEventListener('click', function() {
//     _e('tier-content').innerHTML = 'Table here';
// 		_e('compare').innerHTML = 'Back';
// }, false);
//
// function _e(id) {
//    return document.getElementById(id);
// }

$("#compare").click(function() {
  $("#tier-content").toggle( "down" );
	$("#table").toggle("down");
	$("#compare").change("#back");
});
