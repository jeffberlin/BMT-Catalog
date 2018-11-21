var app = angular.module('catalog', []);
app.controller('catalogCtrl', function($scope, $document) {

// product arrays
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
			url: '',
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
			url: '',
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

	$scope.productsE = [
		{
			company: 'Easyscreen',
			url: 'http://www.softdd.com/escreen/index.htm'
		},
		{
			company: 'eComStation',
			url: 'http://www.ecomstation.com/'
		},
		{
			company: 'Electronic Teller',
			url: 'http://home.cybrnet.net/~phcaron/index.html'
		},
		{
			company: 'Empire Deluxe Enhanced Edition',
			url: 'http://www.killerbeesoftware.com/kbsgames/edee/'
		},
		{
			company: 'Empire Deluxe Internet Edition',
			url: 'http://www.killerbeesoftware.com/kbsgames/ednew/'
		},
		{
			company: 'E\'s Friends',
			url: 'https://www.bmtmicro.com/BMTCatalog/win/esfriends.html'
		},
		{
			company: 'EZDetach',
			url: 'http://www.techhit.com/ezdetach/outlook_attachments.html'
		},
	]

	$scope.productsF = [
		{
			company: 'Family Runner',
			url: 'https://www.bmtmicro.com/BMTCatalog/multipleos/familyrunner.html'
		},
		{
			company: 'File Commander/2',
			url: 'https://www.bmtmicro.com/BMTCatalog/os2/fc2.html'
		},
		{
			company: 'File Commander for Win95/NT',
			url: 'https://www.bmtmicro.com/BMTCatalog/win/fcwin.html'
		},
		{
			company: 'File Splitter Deluxe',
			url: 'http://www.softdd.com/filesplt/index.htm'
		},
		{
			company: 'Fitznik',
			url: 'http://www.screamingduck.com/Fitznik.php'
		},
		{
			company: 'Fitznik 2',
			url: 'http://www.screamingduck.com/Fitznik%202.php'
		},
		{
			company: 'Flash Renamer',
			url: 'http://www.rlvision.com/flashren/about.php'
		},
		{
			company: 'FlyTampa Simulation',
			url: 'http://www.flytampa.org/'
		},
		{
			company: 'Folderlock',
			url: 'http://www.newsoftwares.net/folderlock/'
		},
		{
			company: 'Folderlock lite',
			url: 'http://www.newsoftwares.net/folderlock/lite/'
		},
		{
			company: 'Folder Protect',
			url: 'http://www.newsoftwares.net/folder-protect/'
		},
		{
			company: 'Frazzled',
			url: 'http://www.midnightsynergy.com/frazzled/'
		},
		{
			company: 'Frozzic\'s Revenge',
			url: 'http://www.twilightgames.com/'
		},
		{
			company: 'FTP Control 4.0',
			url: 'http://www.ftpcontrol.com/'
		},
		{
			company: 'Funny Faces',
			url: 'http://www.arcadelab.com/face.html'
		},
	]

	$scope.productsG = [
		{
			company: 'The Goalkeeper',
			url: 'http://www.winterwolves.com/thegoalkeeper.htm'
		},
		{
			company: 'Gold Miner Joe',
			url: 'http://www.arcadelab.com/miner.html'
		},
		{
			company: 'Goobs',
			url: 'https://www.bmtmicro.com/BMTCatalog/win/goobs.html'
		},
		{
			company: 'Gravity Core by Suisoft ',
			url: 'http://www.suisoft.co.uk/gravitycore/index.htm'
		},
	]

	$scope.productsH = [
		{
			company: 'Haron',
			url: 'http://www.webaby-corp.com/store/haron.htm'
		},
		{
			company: 'Heather Honey',
			url: 'http://www.webaby-corp.com/store/heatherhoney.htm'
		},
		{
			company: 'Hexvex',
			url: ''
		},
		{
			company: 'Home Zen Fire',
			url: 'http://www.webaby-corp.com/store/homezen2.htm'
		},
	]

  $scope.productsI = [
    {
      company: 'IconSaver',
      url: 'http://www.iconsaver.com/index.html'
    },
    {
      company: 'Image Converter .EXE',
      url: 'http://www.stintercorp.com/ic/'
    },
    {
      company: 'ImageGrabDummy',
      url: 'http://www.dummysoftware.com/imagegrabdummy.html'
    },
    {
      company: 'Image Thumbnailer and Converter',
      url: 'http://www.softdd.com/thumbnailer/index.htm'
    },
    {
      company: 'Image for DOS',
      url: 'http://www.terabyteunlimited.com/image-for-dos.htm'
    },
    {
      company: 'Image for Linux',
      url: 'http://www.terabyteunlimited.com/image-for-linux.htm'
    },
    {
      company: 'Image for Windows',
      url: 'http://www.terabyteunlimited.com/image-for-windows.htm'
    },
    {
      company: 'In Charge!',
      url: 'https://www.bmtmicro.com/incharge/'
    },
    {
      company: 'Inflater Ball',
      url: 'http://www.dyvision.co.uk/ifbinfo.htm'
    },
    {
      company: 'Integra Office',
      url: ''
    },
    {
      company: 'Intensity XS',
      url: 'http://www.midnightsynergy.com/intensity/'
    },
    {
      company: 'Intensity XS: ReCharge',
      url: 'http://www.midnightsynergy.com/recharge/'
    },
    {
      company: 'Invadazoid',
      url: 'http://www.bantamcity.com/invadazoid/'
    },
  ]

});
