'use strict';

angular.module('codequizApp')
  .controller('MainCtrl', ['$scope','$resource','$rootScope','$window','getQuizCategory','$cookieStore','findTwitter','getFacebook', function($scope, $resource, $rootScope, $window, getQuizCategory,$cookieStore,findTwitter,getFacebook) {

  	// If a user is logged in, push to home page.
	var currentUser = $cookieStore.get('providerID');
	console.log(currentUser);

	if(currentUser)
	{
		$window.location.href = '#/home'
	}

	$scope.width = $window.innerWidth;

	var checkWidth = function(width){
		if(width > 800)
		{
			$scope.mobile = false;
		}else
		{
			$scope.mobile = true;
		}
	};

	// Calling my checkWidth function.
	checkWidth($scope.width);

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