'use strict';

angular.module('websiteApp.directives', [])
  .directive('youtube', ['youTubeService', function (youTubeService) {
    return {
      restrict: "EA",
      scope: {
        code: "@",
        active: "@"
      },
      template: '<div id="{{code}}"><iframe width="420" height="315" src="http://www.youtube.com/embed/{{code}}?enablejsapi=1" frameborder="0" allowfullscreen></iframe> </div>',
      link: function (scope, element, attrs) {
        var player;
        var playerReady = false;
        var playerState = 0;
        var callback;


        function createPlayer() {
          player = new YT.Player(attrs.code, {
            width: 420,
            height: 300,
            videoId: attrs.code,
            events: {
              onReady: function (event) {
                playerReady = true;
                if (callback != null) {
                  callback();
                }
              },
              onStateChange: function (event) {
                playerState = event.data;
              }
            }

          });
        }

        if (youTubeService.ready) {
          createPlayer();
        } else {
          scope.$on('youTubeServiceReady', function (event, args) {
            createPlayer();
          })
        }


        scope.$watch("active", function (value) {
          if (youTubeService.ready) {
            console.log(playerState);
            if (value == "true") {
              if (playerReady && (playerState == YT.PlayerState.PAUSED)) {
                player.playVideo();
              }
            } else {

              if (playerReady && (playerState == YT.PlayerState.BUFFERING || playerState == YT.PlayerState.PLAYING)) {
                player.pauseVideo();
              }
            }

          }

        });
      }
    }
  }])
  .directive("header", function () {
    return {
      restrict: "E",
      templateUrl: "templates/navbar.html"
    }
  })
  .directive("contactme", function () {
    return {
      restrict: "E",
      templateUrl: "templates/contact.html"
    }
  });

