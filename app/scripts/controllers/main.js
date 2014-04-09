'use strict';

angular.module('codequizApp')
  .controller('MainCtrl', ['$scope','$resource','$rootScope','$window','getQuizCategory', function($scope, $resource, $rootScope, $window, getQuizCategory) {

	// Declaring a function that gets called from the view.
	// This function will handle loading the next page to display all the correct titles and quiz info.
	// The parameter for the function is being generated in the view, from the other resource calls.
	$scope.loadTitles = function(title){
		$rootScope.title = title;
	};


	$scope.githubLogin = function()
	{
		// var loginUser = $resource('http://localhost:3000/login-github',{'query': {method:'GET', transformResponse: function (data) {return {list: angular.fromJson(data)}}}});
		// var tempData = loginUser.query(function(){
		//   console.log(tempData.list); // list will be the array in the expected format
		// });
		var loginUser = $resource('http://localhost:3000/login-github/');
		$scope.loggedUser = loginUser.get(function() {
			console.log($scope.loggedUser.login);
			var url = $scope.loggedUser.login;
			$window.location.href = url;
		});
	};

	$scope.twitterLogin = function()
	{
		var loginUser = $resource('http://localhost:3000/login-twitter/');
		$scope.loggedUser = loginUser.get(function() {
			console.log($scope.loggedUser.login);
			var url = $scope.loggedUser.login;
			$window.location.href = url;
		});

	};

}]);