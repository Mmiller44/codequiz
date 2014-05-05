'use strict';

angular.module('codequizApp')
  .controller('MainCtrl', ['$scope','$resource','$rootScope','$window','getQuizCategory','$cookieStore','findTwitter', function($scope, $resource, $rootScope, $window, getQuizCategory,$cookieStore,findTwitter) {

	$scope.githubLogin = function()
	{
		var loginUser = $resource('/login-github/');
		$scope.loggedUser = loginUser.get(function() {
			console.log($scope.loggedUser.login);
			console.log('callback function for github ran.');
			$window.location.href = loggedUser.login;
		});
	};

	// Authorization for a Twitter account. returns a URL, which I redirect to. User signs in and authorizes.
	$scope.twitterLogin = function()
	{
		var twitter = $resource('/login-twitter');
		var returnedObject = twitter.get(function(){

			$window.location.href=returnedObject.login;

			console.log('callback function for twitter ran.');

		});
	};

}]);