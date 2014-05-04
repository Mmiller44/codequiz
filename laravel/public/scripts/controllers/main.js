'use strict';

angular.module('codequizApp',['ngCookies'])
  .controller('MainCtrl', ['$scope','$resource','$rootScope','$window','getQuizCategory','findUser','$cookies', function($scope, $resource, $rootScope, $window, getQuizCategory,findUser,$cookies) {

  	// This call gets an object containing all the information for the user.
  	// I will use this info to search my own database, and add them if necessary.
	var twitterUser = $resource('/get-twitter-user/');
	var returnedUserData = twitterUser.get(function(){
		console.log('running get user.');
		console.log(returnedUserData);

		// If a user exists, push them to the home page and set rootScope variables.
		if(returnedUserData.username)
		{
			$rootScope.username = returnedUserData.username;
			$rootScope.name = returnedUserData.name;
			$rootScope.userLocation = returnedUserData.location;
			$rootScope.userID = returnedUserData.providerID;
			$rootScope.profileImage = returnedUserData.profileImage;

			$cookieStore.put('username',returnedUserData.username);
			// $cookies.name = returnedUserData.name;
			// $cookies.userLocation = returnedUserData.location;
			// $cookies.userID = returnedUserData.providerID;
			// $cookies.profileImage = returnedUserData.profileImage;	

  			$window.location.href = '#/home';
		}
	});

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