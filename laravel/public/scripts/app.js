// -- Mike Miller
// -- Code Quiz App
// -- 04.05.14

'use strict';

angular.module('codequizApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'restangular',
  'hljs',
  'countTo'
])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/home', {
        templateUrl: 'views/home.tpl',
        controller: 'HomeCtrl',
        logginRequired: true
      })
      .when('/quiz_landing/:sub_category', {
        templateUrl: 'views/quiz_landing_view.tpl',
        controller: 'quiz_landing_controller'
        logginRequired: true
      })
      .when('/quiz/:quizID/', {
        templateUrl: 'views/quiz_view.tpl',
        controller: 'quiz_controller'
        logginRequired: true
      })
      .when('/score', {
        templateUrl: 'views/score_view.tpl',
        controller: 'score_controller'
        logginRequired: true
      })
      .when('/contribute', {
        templateUrl: 'views/contribute_landing_view.tpl',
        controller: 'contribute_landing_controller'
        logginRequired: true
      })
      .when('/contribute/:number', {
        templateUrl: 'views/contribute_view.tpl',
        controller: 'contribute_controller'
        logginRequired: true
      })
      .when('/quizzes/:username', {
        templateUrl: 'views/user_quizzes_view.tpl',
        controller: 'user_quizzes_controller'
        logginRequired: true
      })
      .when('/myQuizzes', {
        templateUrl: 'views/my_quizzes_view.tpl',
        controller: 'my_quizzes_controller'
        logginRequired: true
      })
      .when('/answers', {
        templateUrl: 'views/answers_view.tpl',
        controller: 'answers_controller'
        logginRequired: true
      })
      .otherwise({
        redirectTo: '/'
      });


$rootScope.$on('$routeChangeStart',['getFacebook' ,function (event, next, getFacebook) {

    var userAuthenticated = getFacebook; /* Check if the user is logged in */

    if (!userAuthenticated && !next.isLogin) {
        $rootScope.savedLocation = $location.url();
        $location.path('#/');
    }
}]);

  });