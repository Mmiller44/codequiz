'use strict';

angular.module('codequizApp')
  .controller('MainCtrl', ['$scope','$resource','$rootScope','$window','getQuizCategory','$cookieStore','findTwitter','getFacebook', function($scope, $resource, $rootScope, $window, getQuizCategory,$cookieStore,findTwitter,getFacebook) {

	$scope.facebookLogin = function()
	{
		var facebook = $resource('/login-facebook');
		var returnedObject = facebook.get(function(){

			$window.location.href=returnedObject.login;
			
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