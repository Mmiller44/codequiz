'use strict';

angular.module('codequizApp')
  .controller('MainCtrl', ['$scope','$resource','$rootScope','$window','getQuizCategory','findUser', function($scope, $resource, $rootScope, $window, getQuizCategory,findUser) {

	// Hard coding a userID until login is built.
	$rootScope.userID = 20;

	// Declaring a function that gets called from the view.
	// This function will handle loading the next page to display all the correct titles and quiz info.
	// The parameter for the function is being generated in the view, from the other resource calls.
	$scope.loadTitles = function(title){
		$rootScope.title = title;
	};

	$scope.githubLogin = function()
	{
		var loginUser = $resource('http://codequiz.io/login-github/');
		$scope.loggedUser = loginUser.get(function() {
			console.log($scope.loggedUser.login);
			console.log('clicked');
		});
	};

	$scope.twitterLogin = function()
	{
		var twitter = $resource('/login-twitter');
		var returnedObject = twitter.get(function(){
			console.log(returnedObject);
		});
	};


}]);