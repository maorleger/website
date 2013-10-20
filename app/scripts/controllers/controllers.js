'use strict';

angular.module('websiteApp.controllers', [])
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'SitePoint'
    ];
  })
  .controller('AboutCtrl', function ($scope) {

  })
  .controller('SchutzhundCtrl', function ($scope) {

  })
  .controller('navbarCtrl', function ($scope) {
    $scope.isCollapsed = false;
  })
  .controller("YouTubeSelectorCtrl", function ($scope) {
    $scope.tabs = [
      { title: "Elegance of IPO", code: "ugI4P7sS8f4", content: "Travis Foster created this amazing video that in my opinion is the best explanation of what Schutzhund entails"},
      { title: "Einstein Obedience", code: "PB1t5ClVglk", content: "A short video of me and Einstein practicing some obedience"},
      { title: "Einstein Protection 1", code: "_0oSTQ4-TOg", content: "A short video of me and Einstein working on protection basics"},
      { title: "Einstein Protection 2", code: "MFpxp70pLfY", content: "This video shows Einstein as we were getting ready for our IPO3"}
    ];
  });
