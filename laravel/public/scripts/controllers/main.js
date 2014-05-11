'use strict';

angular.module('codequizApp')
  .controller('MainCtrl', ['$scope','$resource','$rootScope','$window','getQuizCategory','$cookieStore','findTwitter', function($scope, $resource, $rootScope, $window, getQuizCategory,$cookieStore,findTwitter) {

	$scope.githubLogin = function()
	{
		var github = $resource('/login-github');
		var returnedObject = github.get(function(){

			$window.location.href=returnedObject.login;

			console.log('callback function for github ran.');

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