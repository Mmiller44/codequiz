'use strict';

angular.module('codequizApp',['count-to'])
  .controller('score_controller',['$scope','$rootScope','$window', function ($scope,$rootScope,$window) {

    if(!$rootScope.finalScore)
    {
    	$window.location.href = '#/home';
    }



}]);