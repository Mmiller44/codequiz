'use strict';

angular.module('codequizApp')
  .controller('HomeCtrl', ['$scope','$resource','$rootScope','$window','getQuizCategory','$cookieStore', function($scope, $resource, $rootScope, $window, getQuizCategory,$cookieStore) {

  	// If a user is not logged in, push them back to landing page.
	var currentUser = $cookieStore.get('providerID');
	console.log(currentUser);

	$window.localStorage.setItem('providerID', 'Mike');
	var test = $window.localStorage.getItem('providerID');
	console.log(test);

	if(!currentUser)
	{
		$window.location.href = '#/'
	}

	$scope.user = $cookieStore.get('username');
	$scope.userImage = decodeURIComponent($cookieStore.get('profileImage'));

	// Declaring a function that gets called from the view.
	// This function will handle loading the next page to display all the correct titles and quiz info.
	// The parameter for the function is being generated in the view, from the other resource calls.
	$scope.loadTitles = function(title){
		$rootScope.title = title;
	};

}]);