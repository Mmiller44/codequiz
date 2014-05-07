'use strict';

angular.module('codequizApp')
  .controller('score_controller',['$scope','$rootScope','$window', function ($scope,$rootScope,$window) {

  	$scope.duration = 2;

    if(!$rootScope.finalScore)
    {
    	$window.location.href = '#/home';

    }else if($rootScope.finalScore < 50)
    {
    	$scope.duration = 1;
    }





}]);