'use strict';

angular.module('codequizApp')

// Declaring a factory which will act as my API calls to the database.
  .factory('getAllUsers',['$resource','$rootScope',function($resource,$rootScope){

	var Users = $resource('http://localhost:3000/get-all-users/');

	// This function calls the resource with the params Front End.
	// Sets $rootScope variable for the template view to load.
	var objectOne = Users.query({}, function() {
			console.log(objectOne);
		});

}])

// Declaring a factory which will act as my API calls to the database.
  .factory('findUser',['$resource','$rootScope',function($resource,$rootScope){

	var Users = $resource('http://localhost:3000/find-specific-user/:provider_ID',{provider_ID: 'Github:34588'});

	// This function calls the resource with the params Front End.
	// Sets $rootScope variable for the template view to load.
	var objectOne = Users.query({}, function() {
			console.log(objectOne);
		});

}]);