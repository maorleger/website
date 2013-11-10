'use strict';

angular.module('websiteApp')
  .controller('SchutzhundpicsCtrl', ['$scope', function ($scope) {
    $scope.myInterval = 5000;
    var slides = $scope.slides = [
      {
        image: '/static/images/einstein-trophies.jpg',
        text: 'The day we earned out IPO3. Einstein enjoying all his trophies :)'
      },
      {
        image: '/static/images/einstein-stacked.jpg',
        text: 'Einstein in a natural GSD "stack"'
      },
      {
        image: '/static/images/einstein-standing.jpg',
        text: 'Einstein doing stand out of motion'
      },
      {
        image: '/static/images/einstein-move.jpg',
        text: 'Einstein in movement'
      },
      {
        image: '/static/images/einstein-aframe.jpg',
        text: 'Einstein retrieving a dumbbell over an A-frame. IPO1 Trial.'
      },
      {
        image: '/static/images/einstein-jump.jpg',
        text: 'Einstein retrieving a dumbbell over a jump. IPO1 Trial.'
      }
    ];
  }]);
