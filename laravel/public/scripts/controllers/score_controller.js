'use strict';

angular.module('codequizApp')
  .controller('score_controller','$scope','$rootScope','$window', function ($scope,$rootScope,$window) {

    if(!$rootScope.finalScore)
    {
    	$window.location.href = '#/home';
    }

    

  });