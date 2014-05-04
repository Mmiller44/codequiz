'use strict';

angular.module('codequizApp')
  .controller('HomeCtrl', ['$scope','$resource','$rootScope','$window','getQuizCategory','findUser','$cookieStore', function($scope, $resource, $rootScope, $window, getQuizCategory,findUser,$cookieStore) {

  	// If a user is not logged in, push them back to landing page.
  	var providerID = $cookieStore.get('providerID');

	if(!providerID)
	{
		$window.location.href = '#/'
	}

	console.log(providerID);

	var myUserInfo = getUserInfo(providerID);
	console.log(myUserInfo);

	// Declaring a function that gets called from the view.
	// This function will handle loading the next page to display all the correct titles and quiz info.
	// The parameter for the function is being generated in the view, from the other resource calls.
	$scope.loadTitles = function(title){
		$rootScope.title = title;
	};

}]);