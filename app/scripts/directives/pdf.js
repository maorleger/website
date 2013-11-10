'use strict';

angular.module('websiteApp')
  .directive('pdf', [function () {
    return {
      template: '<div>\n  <object data="{{url}}" type="application/pdf" width="{{width}}" height="{{height}}">\n    <p>It appears you don\'t have a PDF plugin for this browser. You can still view the PDF <a href="/static/{{name}}">here</a>.</p>\n  </object>\n</div>',
      scope: {
        width: "@",
        height: "@",
        url: "@"
      },
      restrict: 'E'
    };
  }]);
