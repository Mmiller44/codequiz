'use strict';

angular.module('codequizApp')
  .controller('score_controller',['$scope','$rootScope','$window','$cookieStore', function ($scope,$rootScope,$window,$cookieStore) {

  	// If a user is not logged in, push them back to landing page.
	var currentUser = $cookieStore.get('providerID');
	console.log(currentUser);

	if(!currentUser)
	{
		$window.location.href = '#/'
	}

	$scope.user = $cookieStore.get('username');
	$scope.userImage = decodeURIComponent($cookieStore.get('profileImage'));

  	$scope.duration = 2;

    if(!$rootScope.finalScore)
    {
    	$window.location.href = '#/home';

    }else if($rootScope.finalScore < 50)
    {
    	$scope.duration = 1;
    }





}]);