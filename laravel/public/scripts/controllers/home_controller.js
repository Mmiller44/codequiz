'use strict';

angular.module('codequizApp')
  .controller('HomeCtrl', ['$scope','$resource','findUser','$window','getQuizCategory','$cookieStore','$rootScope', function($scope, $resource, findUser, $window, getQuizCategory,$cookieStore,$rootScope) {

	if($window.localStorage)
	{
		$scope.user = $window.localStorage.getItem('username');
		$scope.userImage = decodeURIComponent($window.localStorage.getItem('profileImage'));
		$window.localStorage.setItem('quizID', '');
	}else
	{
		$scope.user = $cookieStore.get('username');
		$scope.userImage = decodeURIComponent($cookieStore.get('profileImage'));
		$cookieStore.set('quizID', '');
	}

	// Declaring a function that gets called from the view.
	// This function will handle loading the next page to display all the correct titles and quiz info.
	// The parameter for the function is being generated in the view, from the other resource calls.
	$scope.loadTitles = function(title){
		$rootScope.title = title;
	};

}]);