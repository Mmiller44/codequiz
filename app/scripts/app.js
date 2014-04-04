'use strict';

angular.module('codequizApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/quiz_landing', {
        templateUrl: 'views/quiz_landing_view.tpl',
        controller: 'quiz_landing_controller'
      })
      .when('/quiz', {
        templateUrl: 'views/quiz_view.tpl',
        controller: 'quiz_controller'
      })
      .when('/score', {
        templateUrl: 'views/score_view.tpl',
        controller: 'score_controller'
      })
      .when('/contribute', {
        templateUrl: 'views/contribute_view.tpl',
        controller: 'contribute_controller'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
