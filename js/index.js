$(function() {
    var scrollUp = $("#topcontrol");
    var bodyHeight = $("body").height();
    $(window).scroll(function() {
        if (bodyHeight <= $(window).height() + $(window).scrollTop() + 100) {
            scrollUp.fadeIn();
        } else {
            scrollUp.hide();
        }
    });
});

// JS for scrolling back to top of the page
$("#topcontrol").click(function() {
	$('html, body').animate({
		scrollTop: $("#primary").offset().top
	}, 'slow')
})
