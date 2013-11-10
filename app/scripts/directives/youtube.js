'use strict';

angular.module('websiteApp')
  .directive('youtube', ['youTubeService', function (youTubeService) {
    return {
      restrict: 'EA',
      scope: {
        code: '@',
        active: '@'
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

        scope.$watch('isCollapsed', function (value) {
          console.log('isCollapsed', value);
        });

        if (youTubeService.ready) {
          createPlayer();
        } else {
          scope.$on('youTubeServiceReady', function (event, args) {
            createPlayer();
          })
        }


        scope.$watch('active', function (value) {
          if (youTubeService.ready && playerReady) {
            if (value == 'true') {
              if (playerState == YT.PlayerState.PAUSED) {
                // I only want to resume videos that have started playing and have been paused
                player.playVideo();
              }
            } else {
              player.pauseVideo();
            }

          }

        });
      }
    };
  }]);
