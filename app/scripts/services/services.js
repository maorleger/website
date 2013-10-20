'use strict';

/* Services */


angular.module('websiteApp.services', [])
  .service('youTubeService', ['$rootScope', '$window', function ($rootScope, $window) {
    var self = this;
    self.ready = false;
    $window.onYouTubeIframeAPIReady = function () {
      self.ready = true;
      $rootScope.$broadcast('youTubeServiceReady', true);
    };
    var tag = document.createElement('script');
    tag.src = "http://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }]);