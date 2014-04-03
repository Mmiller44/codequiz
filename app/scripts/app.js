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
        controller: 'MainCtrl'
      })
      .when('/quiz', {
        templateUrl: 'views/quiz_view.tpl',
        controller: 'MainCtrl'
      })
      .when('/score', {
        templateUrl: 'views/score_view.tpl',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
