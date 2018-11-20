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
	$scope.products = [
		{
			company: '3D Flash Animator',
			url: 'http://www.3dfa.com/',
			grouping: '0-9'
		},
		{
			company: 'A+ Screensaver',
			url: 'http://www.softdd.com/screens/index.htm',
			grouping: 'A'
		},
		{
			company: 'Batch Rename .EXE',
			url: 'http://www.stintercorp.com/purchase/br/',
			grouping: 'B'
		}
	]

});
