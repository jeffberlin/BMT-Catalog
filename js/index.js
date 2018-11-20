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

// Products search filter
// function searchFunction() {
//     var input, filter, ul, li, a, i;
//     input = document.getElementById("productInput");
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("myUL");
//     li = ul.getElementsByTagName("li");
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];
//         if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }

var app = angular.module('catalog', []);
app.controller('catalogCtrl', function($scope, $document) {

// product array
	$scope.productsDigits = [
		{
			company: '3D Flash Animator',
			url: 'http://www.3dfa.com/',
		},

	]

	$scope.productsA = [
		{
			company: 'A+ Screensaver',
			url: 'http://www.softdd.com/screens/index.htm',
		},
		{
			company: 'Aargon BlackBox',
			url: 'http://www.twilightgames.com/',
		},
		{
			company: 'Aargon Deluxe Gold',
			url: 'http://www.twilightgames.com/',
		},
		{
			company: 'Access Elf',
			url: 'http://www.elfsoft.com/',
		},
		{
			company: 'Address N More',
			url: 'https://www.bmtmicro.com/BMTCatalog/win/addressnmore.html',
		},
		{
			company: 'Advanced Landscape Editor',
			url: 'http://www.dyvision.co.uk/ale.htm',
		},
		{
			company: 'Araxis Ketura',
			url: 'https://www.araxis.com/ketura/',
		},
		{
			company: 'Araxis Merge',
			url: 'https://www.araxis.com/merge/',
		},
		{
			company: 'ArcaMania',
			url: 'http://www.300ad.com/arcamania.php',
		},
		{
			company: 'ArcaMania 2',
			url: 'http://www.300ad.com/arcamania2.php',
		},
		{
			company: 'AutoSeam',
			url: 'http://www.dyvision.co.uk/autoseam.htm',
		},
		{
			company: 'AVI/MPG Screensaver',
			url: 'http://www.softdd.com/aviscrn/index.htm',
		},
	]

	$scope.productsB = [
		{
			company: 'Batch Rename .EXE',
			url: 'http://www.stintercorp.com/purchase/br/',
		},
	]

});
