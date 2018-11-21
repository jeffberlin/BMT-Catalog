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

  $scope.productsJ = [
    {
      company: 'Jack of All Trades',
      url: 'http://www.dingogames.com/jack/'
    },
    {
      company: 'Jets\'n\'Guns',
      url: 'https://www.bmtmicro.com/BMTCatalog/win/jetsnguns.html'
    },
    {
      company: 'Jump To Window',
      url: 'http://www.techhit.com/JumpToWindow/'
    },
    {
      company: 'Journal 7',
      url: 'http://www.davidrm.com/'
    },
  ]

  $scope.productsL = [
    {
      company: 'Laser Dolphin',
      url: 'http://www.dingogames.com/dolphin/'
    },
    {
      company: 'Lesson Planner for Windows 2',
      url: 'http://www.dbandsons.com/'
    },
    {
      company: 'Lesson Planner Plus',
      url: 'http://www.dbandsons.com/'
    },
    {
      company: 'Luxor',
      url: 'https://www.arcadetown.com/luxor/showgame.asp'
    },
  ]

  $scope.productsM = [
    {
      company: 'Magellan Explorer',
      url: 'http://www.enriva.com/'
    },
    {
      company: 'Mahjong Suite',
      url: 'http://www.mahjongsuite.com/'
    },
    {
      company: 'MailBell',
      url: 'https://www.emtec.com/mailbell/index.html'
    },
    {
      company: 'Mailist King Pro',
      url: 'http://www.xequte.com/maillistking/index.html'
    },
    {
      company: 'Matrix',
      url: 'http://www.bmtmicro.com/chorus/matrix.html'
    },
    {
      company: 'Maul Publisher',
      url: 'http://www.manglais.com/index.html'
    },
    {
      company: 'MegaView',
      url: 'http://www.xequte.com/megaview/index.html'
    },
    {
      company: 'MessageSave',
      url: 'http://www.techhit.com/messagesave/'
    },
    {
      company: 'Midnight Synergy Games Collection CD',
      url: 'http://www.midnightsynergy.com/collectioninfo/'
    },
    {
      company: 'Moneydance',
      url: 'http://moneydance.com/'
    },
    {
      company: 'Money Quiz-Counter',
      url: 'https://www.bmtmicro.com/BMTCatalog/win/moneyquizcounter.html'
    },
    {
      company: 'Mr Cool Ball',
      url: 'https://www.warlockstudio.com/mcb.php'
    },
    {
      company: 'MX Simulator',
      url: 'http://mxsimulator.com/'
    },
    {
      company: 'My Problem Solved!',
      url: 'http://www.dbandsons.com/'
    },
    {
      company: 'Mystica',
      url: ''
    },
    {
      company: 'Mystic Mist',
      url: 'http://www.webaby-corp.com/store/mysticmist.htm'
    },
  ]

  $scope.productsN = [
    {
      company: 'Netdrive',
      url: 'https://www.bmtmicro.com/BMTCatalog/os2/netdrive.html'
    },
    {
      company: 'New Freedom Bible',
      url: 'http://self-helpsoftware.com/NFB'
    },
    {
      company: 'No Fly Zone Screensaver',
      url: 'https://www.bmtmicro.com/BMTCatalog/win/noflyzonescreensaver.html'
    },
    {
      company: 'Num-Blocks',
      url: 'http://www.uppergroove.com/numblocks.htm'
    },
    {
      company: 'Num2Alpha ActiveX DLL',
      url: 'http://www.ancientsoft.com/num2alpha.htm'
    },
  ]

  $scope.productsO =[
    {
      company: 'Olaf & Elmar',
      url: 'http://www.wieringsoftware.nl/'
    },
    {
      company: 'Once Twice Thrice',
      url: 'http://www.questengine.com/'
    },
    {
      company: 'One Man Band',
      url: 'http://www.1manband.nl/omb.htm'
    },
    {
      company: 'OS/2 e-Zine!',
      url: 'https://www.bmtmicro.com/BMTCatalog/os2/os2ezine.html'
    },
  ]

  $scope.productsP = [
    {
      company: 'Paul\'s Graphic Viewer',
      url: 'http://www.deleeuw.com.au/'
    },
    {
      company: 'PC Spy',
      url: 'http://www.softdd.com/pc-spy-software/index.html'
    },
    {
      company: 'Peepers',
      url: 'http://www.smartmelon.com/peepers/'
    },
    {
      company: 'Personal Knowbase',
      url: 'http://www.bitsmithsoft.com/product.htm'
    },
    {
      company: 'Personal Time Keeper',
      url: 'https://www.bmtmicro.com/BMTCatalog/win/personaltimekeeper.html'
    },
    {
      company: 'Pharaoh\'s Curse Gold',
      url: 'http://www.ancientsoft.com/pharaohs_curse.htm'
    },
    {
      company: 'Pharaohs\' Treasure',
      url: 'http://www.ancientsoft.com/pharaohstreasure.htm'
    },
    {
      company: 'Picture Viewer .EXE',
      url: 'http://www.stintercorp.com/purchase/pv/'
    },
    {
      company: 'Pipeline Plus',
      url: 'https://www.bmtmicro.com/BMTCatalog/win/pipelineplus.html'
    },
    {
      company: 'Pirates of Treasure Island',
      url: 'http://www.arcadelab.com/pirates.html'
    },
    {
      company: 'PMView Pro',
      url: 'http://www.pmview.com/'
    },
    {
      company: 'Pocket Tanks Deluxe',
      url: 'http://www.blitwise.com/ptanks.html'
    },
    {
      company: 'Pocket Tanks Deluxe - MAC Edition',
      url: 'http://www.blitwise.com/ptanksdeluxe_mac.html'
    },
    {
      company: 'PopUpDummy!',
      url: 'http://www.dummysoftware.com/popupdummy.html'
    },
    {
      company: 'Problem Solved! 1.45',
      url: 'http://www.dbandsons.com/'
    },
    {
      company: 'Professor Green Screen',
      url: 'http://www.professorgreenscreen.com/index.php'
    },
    {
      company: 'Public Space',
      url: 'http://www.publicspace.net/'
    },
    {
      company: 'Puzzle Word',
      url: 'https://www.bmtmicro.com/BMTCatalog/win/puzzleword.html'
    },
  ]

  $scope.productsQ = [
    {
      company: 'QUAD Help Desk',
      url: 'http://www.quadhelpdesk.com/'
    },
    {
      company: 'QuickJump',
      url: 'http://www.techhit.com/QuickJump/open_navigate_windows_folders.html'
    },
    {
      company: 'Quizland',
      url: 'https://www.bmtmicro.com/BMTCatalog/multipleos/quizland.html'
    },
  ]

  $scope.productsR = [
    {
      company: 'Raptor',
      url: 'http://www.mking.com/raptor_game.html'
    },
    {
      company: 'RatMaster',
      url: 'http://www.twilightgames.com/'
    },
    {
      company: 'Ravenskull',
      url: 'https://www.bmtmicro.com/BMTCatalog/win/ravenskull.html'
    },
    {
      company: 'Recovery Companion',
      url: 'http://self-helpsoftware.com/RTS'
    },
    {
      company: 'Repton 1',
      url: 'https://www.bmtmicro.com/BMTCatalog/win/repton1.html'
    },
    {
      company: 'Return on Investment Solver',
      url: 'http://www.roisolver.com/'
    },
    {
      company: 'Return to Wonderland Platinum Edition',
      url: 'http://www.midnightsynergy.com/returntowonderland/'
    },
    {
      company: 'Rockfall - The Return',
      url: ''
    },
    {
      company: 'Rock\'n\'Roll 2004',
      url: 'http://www.300ad.com/rnr2004.php'
    },
    {
      company: 'Rowan Castle',
      url: 'http://www.webaby-corp.com/store/index.htm'
    },
  ]

  $scope.productsS = [
    {
      company: 'ScreenSaver',
      url: 'https://www.bmtmicro.com/BMTCatalog/multipleos/ssaver.html'
    },
    {
      company: 'SDI LPD',
      url: 'http://www.sdisw.com/LPD/default.htm'
    },
    {
      company: 'SeriousTeaches',
      url: 'http://www.seriousteachers.com/'
    },
    {
      company: 'SendAware',
      url: 'http://www.techhit.com/SendAware/'
    },
    {
      company: 'SharpEye',
      url: 'http://www.visiv.co.uk/'
    },
    {
      company: 'SharpEye2',
      url: 'http://www.visiv.co.uk/'
    },
    {
      company: 'SignOut',
      url: ''
    },
    {
      company: 'SimplyFile',
      url: 'http://www.techhit.com/SimplyFile/'
    },
    {
      company: 'SimplyTag',
      url: 'http://www.techhit.com/SimplyTag/'
    },
    {
      company: 'Smart Pix Manager',
      url: 'http://www.xequte.com/smartpix/index.html'
    },
    {
      company: 'A Snake\'s Life',
      url: 'http://www.twilightgames.com/'
    },
    {
      company: 'SnakeTris',
      url: 'http://www.dyvision.co.uk/snaketris.htm'
    },
    {
      company: 'SnoozeIt',
      url: 'http://www.techhit.com/SnoozeIt/'
    },
    {
      company: 'Snowball Frenzy',
      url: 'https://www.bmtmicro.com/BMTCatalog/win/snowballfrenzy.html'
    },
    {
      company: 'SoftSew Design',
      url: 'http://www.softsew.com/products.htm'
    },
    {
      company: 'Solitaire City',
      url: 'http://www.solitairecity.com/Main.shtml'
    },
    {
      company: 'SolSuite 2018 - Solitaire Card Games Suite',
      url: 'http://solsuite.com/'
    },
    {
      company: 'Splash 3D Classic',
      url: 'http://www.pixelescape.com/games.html'
    },
    {
      company: 'SRM Help Desk 2000',
      url: 'http://www.dbandsons.com/'
    },
    {
      company: 'Start Menu Organizer',
      url: 'http://www.winstep.net/startmenuorganizer.asp'
    },
    {
      company: 'StayOn',
      url: 'http://stayonpro.com/'
    },
    {
      company: 'StayOn',
      url: 'http://www.sudokuup.com/'
    },
    {
      company: 'Super Bubble Mania',
      url: 'http://www.pixelescape.com/games.html'
    },
    {
      company: 'Super DX-Ball Deluxe',
      url: 'http://www.blitwise.com/superdxb.html'
    },
    {
      company: 'Super Splash 3D',
      url: 'http://www.pixelescape.com/games.html'
    },
    {
      company: 'Supernova: Galactic Wars',
      url: 'http://www.winterwolves.com/supernova.htm'
    },
    {
      company: 'Superstar Chefs',
      url: 'http://www.arcadelab.com/chefs.html'
    },
    {
      company: 'Super Worms',
      url: 'http://www.wieringsoftware.nl/sw/'
    },
    {
      company: 'Swift to-do list',
      url: 'http://www.dextronet.com/'
    },
  ]

  $scope.productsT = [
    {
      company: 'Taskforce 3',
      url: 'http://www.uppergroove.com/task3.htm'
    },
    {
      company: 'Taskforce 4',
      url: 'http://www.uppergroove.com/task4.htm'
    },
    {
      company: 'TaxGst',
      url: 'http://www.taxgst.com/'
    },
    {
      company: 'Team Sports Scheduling System v5',
      url: 'http://www.galactix.com/tsss/index.html'
    },
    {
      company: 'Terabyte Unlimited',
      url: 'http://www.terabyteunlimited.com/index.htm'
    },
    {
      company: 'TimeKeeper/2',
      url: 'https://www.bmtmicro.com/BMTCatalog/os2/timekeeper2.html'
    },
    {
      company: 'Time-Lapse Tool Pro',
      url: 'http://timelapsetool.com/'
    },
    {
      company: 'Tizzie\'s Bubble Chase',
      url: 'http://www.uppergroove.com/tizzbub.htm'
    },
    {
      company: 'Tizzie\'s Bug Revenge',
      url: 'http://www.uppergroove.com/tizzbug.htm'
    },
    {
      company: 'TK-Tools',
      url: 'https://www.bmtmicro.com/BMTCatalog/os2/tktools.html'
    },
    {
      company: 'TN3270 Plus',
      url: 'http://www.sdisw.com/'
    },
    {
      company: 'Total Game Control',
      url: 'http://www.digitaltransforms.com/'
    },
    {
      company: 'Treasure Fall',
      url: 'http://www.mking.com/treasurefall_game.html'
    },
    {
      company: 'Trials of Werlin',
      url: 'http://www.bantamcity.com/werlin/'
    },
    {
      company: 'Turbo Business Apps for Linux',
      url: 'https://www.bmtmicro.com/BMTCatalog/linux/turbobusinessappsforlinux.html'
    },
    {
      company: 'TurboHex',
      url: 'http://www.genkisoft.com/turbohex.shtml'
    },
    {
      company: 'Twilight Mahjongg',
      url: 'http://www.twilightgames.com/'
    },
    {
      company: 'Twilight Simple Mahjongg',
      url: 'http://www.twilightgames.com/'
    },
  ]

});
