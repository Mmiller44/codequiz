// -- Mike Miller
// -- Code Quiz App
// -- 04.05.14

'use strict';

angular.module('codequizApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'restangular'
])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/quiz_landing/:sub_category', {
        templateUrl: 'views/quiz_landing_view.tpl',
        controller: 'quiz_landing_controller'
      })
      .when('/quiz/:quizID', {
        templateUrl: 'views/quiz_view.tpl',
        controller: 'quiz_controller'
      })
      .when('/score', {
        templateUrl: 'views/score_view.tpl',
        controller: 'score_controller'
      })
      .when('/contribute', {
        templateUrl: 'views/contribute_landing_view.tpl',
        controller: 'contribute_controller'
      })
      .when('/contribute/:number', {
        templateUrl: 'views/contribute_view.tpl',
        controller: 'contribute_controller'
      })
      .otherwise({
        redirectTo: '/'
      });


  });