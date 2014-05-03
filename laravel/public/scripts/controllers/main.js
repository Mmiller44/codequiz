'use strict';

angular.module('codequizApp')
  .controller('MainCtrl', ['$scope','$resource','$rootScope','$window','getQuizCategory','findUser', function($scope, $resource, $rootScope, $window, getQuizCategory,findUser) {


	var twitterUser = $resource('/get-twitter-user/');
	var returnedUserData = twitterUser.get(function(){
		console.log('running get user.');
		console.log(returnedUserData);
	});

	if(returnedUserData.username)
	{
  		$window.location.href = '#/home';
	}

	// Hard coding a userID until login is built.
	$rootScope.userID = 20;

	$scope.githubLogin = function()
	{
		var loginUser = $resource('/login-github/');
		$scope.loggedUser = loginUser.get(function() {
			console.log($scope.loggedUser.login);
			console.log('callback function for github ran.');
			$window.location.href = loggedUser.login;
		});
	};

	$scope.twitterLogin = function()
	{
		var twitter = $resource('/login-twitter');
		var returnedObject = twitter.get(function(){

			$window.location.href=returnedObject.login;

			console.log('callback function for twitter ran.');

		});
	};


}])

  .controller('HomeCtrl', ['$scope','$resource','$rootScope','$window','getQuizCategory','findUser', function($scope, $resource, $rootScope, $window, getQuizCategory,findUser) {
	// Declaring a function that gets called from the view.
	// This function will handle loading the next page to display all the correct titles and quiz info.
	// The parameter for the function is being generated in the view, from the other resource calls.
	$scope.loadTitles = function(title){
		$rootScope.title = title;
	};

}]);
