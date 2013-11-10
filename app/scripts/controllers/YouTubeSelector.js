'use strict';

angular.module('websiteApp')
  .controller('YouTubeselectorCtrl', ['$scope', function ($scope) {
    $scope.isCollapsed = false;
    $scope.tabs = [
      { title: 'Elegance of IPO', code: 'ugI4P7sS8f4', content: 'The best explanation of Schutzhund and what is involved. Great introductory video by Travis Foster!'},
      { title: 'Einstein Obedience', code: 'PB1t5ClVglk', content: 'A short video of me and Einstein practicing some obedience. Video by Steve Hong at k9key'},
      { title: 'Einstein Protection 1', code: '_0oSTQ4-TOg', content: 'A short video of me and Einstein working on protection basics'},
      { title: 'Einstein Protection 2', code: 'MFpxp70pLfY', content: 'This video shows Einstein as we were getting ready for our IPO3'}
    ];
  }]);
