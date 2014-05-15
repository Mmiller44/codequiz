'use strict';

angular.module('codequizApp')
  .controller('score_controller',['$scope','$rootScope','$window','$cookieStore','findUser', function ($scope,$rootScope,$window,$cookieStore,findUser) {

  if($window.localStorage)
  {
    $scope.user = $window.localStorage.getItem('providerID');
    $scope.userImage = decodeURIComponent($window.localStorage.getItem('profileImage'));
    $scope.userID = $window.localStorage.getItem('userID');
  }else
  {
    $scope.user = $cookieStore.get('username');
    $scope.userImage = decodeURIComponent($cookieStore.get('profileImage'));
    $scope.userID = $cookieStore.get('userID');
  }

	$scope.duration = 1;

  if(!$rootScope.finalScore)
  {
  	$window.location.href = '#/home';

  }else if($rootScope.finalScore < 50)
  {
  	$scope.duration = 1;
  }





}]);