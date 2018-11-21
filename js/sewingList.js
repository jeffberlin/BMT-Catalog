var app = angular.module('sewingCatalog', []);
app.controller('sewingCtrl', function($scope, $document) {
// array of sewing products
  $scope.productsSewing = [
    {
      company: 'Threadsnscissors',
      url: 'http://www.threadsnscissors.com/'
    },
    {
      company: 'Bargain Embroidery Store',
      url: 'http://www.bargainembstore.com/'
    },
    {
      company: 'Inspiration Mutz Embroidery',
      url: 'http://www.inspirationmutz.com/'
    },
    {
      company: 'FromTheneedleOfAnne',
      url: 'http://www.fromtheneedleofanne.com/'
    },
    {
      company: 'Elsa\'s Designs',
      url: 'http://www.elsasdesigns.com/'
    },
    {
      company: 'Chantell\'s Creations',
      url: 'http://www.chantells-creations.com/'
    },
    {
      company: 'SoftSew',
      url: 'http://www.softsew.com/'
    },
    {
      company: 'Designs4Africa',
      url: 'http://www.designs4africa.com/'
    },
    {
      company: 'DesignsbyPetro',
      url: 'http://www.designsbypetro.com/'
    },
  ]

});
