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
		{
			company: 'Been There, Done That!',
			url: 'http://www.dbandsons.com/',
		},
		{
			company: 'Best Friends Forever',
			url: 'http://www.retro64.com/ordernew.asp?frombf=true',
		},
		{
			company: 'Better Finder Rename',
			url: 'http://www.publicspace.net/ABetterFinderRename/index.html',
		},
		{
			company: 'Bible Aid',
			url: 'http://self-helpsoftware.com/BibleAid',
		},
		{
			company: 'Big Head Zed',
			url: 'http://www.gearhand.com/',
		},
		{
			company: 'Bootit Bare Metal',
			url: 'http://www.terabyteunlimited.com/bootit-bare-metal.htm',
		},
		{
			company: 'Bricks of Egypt',
			url: 'http://www.arcadelab.com/egypt.html',
		},
		{
			company: 'Bugatron',
			url: 'http://www.retro64.com/bugatron.asp',
		},
	]

	$scope.productsC = [
		{
			company: 'CDStartDummy!',
			url: 'http://www.dummysoftware.com/cdstart.html',
		},
		{
			company: 'Charlie II',
			url: 'http://www.wieringsoftware.nl/ch2/',
		},
		{
			company: 'Charlie the Duck',
			url: 'http://www.wieringsoftware.nl/charlie/',
		},
		{
			company: 'CHM4Clarion',
			url: 'http://www.carlbarnes.com/chm4clarion.htm',
		},
		{
			company: 'Chronilist',
			url: 'http://www.integracomputing.com/kmain.htm',
		},
		{
			company: 'Church Office Professional',
			url: 'http://www.dbandsons.com/',
		},
		{
			company: 'Church Secretary 32',
			url: 'http://www.dbandsons.com/',
		},
		{
			company: 'Church Secretary Pro Edition',
			url: 'http://www.dbandsons.com/',
		},
		{
			company: 'Clarion Source Search',
			url: 'http://www.carlbarnes.com/css.htm',
		},
		{
			company: 'Client Tracks',
			url: 'http://www.integracomputing.com/cmain.htm',
		},
		{
			company: 'Cloud Secure',
			url: 'http://www.newsoftwares.net/cloud-secure/',
		},
		{
			company: 'Coin Planets',
			url: 'http://www.addictive247.co.uk/coinplanets.htm',
		},
		{
			company: 'Colony',
			url: 'http://www.midnightsynergy.com/colony/',
		},
		{
			company: 'Copy Protect',
			url: 'http://www.newsoftwares.net/copy-protect/',
		},
		{
			company: 'Cosmo Bots',
			url: 'http://www.retro64.com/cosmobots.asp',
		},
		{
			company: 'Complete Cleanup',
			url: 'http://www.softdd.com/complete/index.htm',
		},
		{
			company: 'Crystal Cave Gold',
			url: 'http://www.300ad.com/crystal_cave_gold.php',
		},
		{
			company: 'CW Assistant',
			url: 'http://www.carlbarnes.com/cwa.htm',
		},
	]

	$scope.productsD = [
		{
			company: 'DataRevelation',
			url: 'http://www.datarevelation.com/'
		},
		{
			company: 'DBS Help Desk',
			url: 'http://www.dbandsons.com/'
		},
		{
			company: 'Demon Star',
			url: 'http://www.mking.com/demonstar_game.html'
		},
		{
			company: 'Demon Star - Secret Missions 1',
			url: 'http://www.mking.com/demonstarsm1_game.html'
		},
		{
			company: 'Demon Star - Secret Missions 2',
			url: 'http://www.mking.com/demonstarsm2_game.html'
		},
		{
			company: 'Digi Pool',
			url: 'http://www.arcadelab.com/digipool.html'
		},
		{
			company: 'Documents Illustrative',
			url: 'http://www.documentsillustrative.com/'
		},
		{
			company: 'The Dragon',
			url: 'http://www.webaby-corp.com/store/homezenfire.htm'
		},
		{
			company: 'DRECKBAK',
			url: 'http://weismer.virtualave.net/DreckBak.html'
		},
		{
			company: 'Drippy',
			url: 'http://www.screamingduck.com/Drippy.php'
		},
		{
			company: 'Dupli Find',
			url: 'http://www.rlvision.com/dupli/about.php'
		},
		{
			company: 'DvD PixPlay',
			url: 'http://www.xequte.com/pixplay/index.html'
		},
	]

});
