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

// Array for Sewing Products
var sewingProducts = {
	sewingInfo : [
	{
		"company": "Threadsnscissors",
		"url": "http://www.threadsnscissors.com/"
	},
	{
		"company": "Bargain Embroidery Store",
		"url": "http://www.bargainembstore.com/"
	},
	{
		"company": "Inspiration Mutz Embroidery",
		"url": "http://www.inspirationmutz.com/"
	},
	{
		"company": "FromTheneedleOfAnne",
		"url": "http://www.fromtheneedleofanne.com/"
	},
	{
		"company": "Elsa's Designs",
		"url": "http://www.elsasdesigns.com/"
	},
	{
		"company": "Chantell's Creations",
		"url": "http://www.chantells-creations.com/"
	},
	{
		"company": "SoftSew",
		"url": "http://www.softsew.com/"
	},
	{
		"company": "Designs4Africa",
		"url": "http://www.designs4africa.com/"
	},
	{
		"company": "DesignsbyPetro",
		"url": "http://www.designsbypetro.com/"
	},
	{
		"company": "Diana's Designs",
		"url": "http://www.dianasdezigns.com/"
	},
	{
		"company": "Ellen Jaye Designs",
		"url": "http://www.ellenjayedesigns.com/"
	}]
}
