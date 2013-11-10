'use strict';

angular.module('websiteApp')
  .factory('dataSets', [function () {
    // Public API here
    var data = {
      externalLinks: [
        {
          name: 'GitHub',
          description: 'My GitHub account',
          url: 'https://github.com/maorleger'
        },
        {
          name: 'LinkedIn',
          description: 'My LinkedIn account, not actively maintained',
          url: 'http://www.linkedin.com/pub/maor-leger/b/86b/3b9'
        }
      ],
      technologiesUsed: [
        {
          name: 'AngularJS',
          description: 'A JavaScript MVVM framework.',
          url: 'http://angularjs.org/'
        },
        {
          name: 'WordPress',
          description: 'Blog Tool, Publishing Platform, and CMS.',
          url: 'http://wordpress.org/'
        },
        {
          name: 'Bootstrap CSS',
          description: 'Twitter Bootstrap front-end CSS.',
          url: 'http://getbootstrap.com/2.3.2/'
        },
        {
          name: 'UI-Bootstrap',
          description: 'Bootstrap components written in pure Angular JS.',
          url: 'http://angular-ui.github.io/bootstrap/'
        },
        {
          name: 'Angular-UI Grid',
          description: 'Angular Data Grid written in AngularJS and jQuery.',
          url: 'http://angular-ui.github.io/ng-grid/'
        },
        {
          name: 'UI-Router',
          description: 'Flexible routing with nested views written in AngularJS.',
          url: 'http://angular-ui.github.io/ui-router/sample/#/about'
        }
      ]
    };
    return {
      getData: function (dataSetName) {

        return data[dataSetName];
      }

    };
  }]);
