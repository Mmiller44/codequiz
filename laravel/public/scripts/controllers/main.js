'use strict';

angular.module('codequizApp')
  .controller('MainCtrl', ['$scope','$resource','$rootScope','$window','getQuizCategory','findUser','$cookieStore', function($scope, $resource, $rootScope, $window, getQuizCategory,findUser,$cookieStore) {

  	// This call gets an object containing all the information for the user.
  	// I will use this info to search my own database, and add them if necessary.
	var twitterUser = $resource('/get-twitter-user/');
	var returnedUserData = twitterUser.get(function(){
		console.log('running get user.');
		console.log(returnedUserData);

		// If a user exists, push them to the home page and set rootScope variables.
		if(returnedUserData.username)
		{
			$cookieStore.put('username',returnedUserData.username;
			$cookieStore.put('name', = returnedUserData.name;
			$cookieStore.put('location',returnedUserData.location;
			$cookieStore.put('profileImage',returnedUserData.profileImage;
			$cookieStore.put('website', returnedUserData.website);

			$cookieStore.put('providerID',returnedUserData.providerID);

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