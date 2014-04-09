'use strict';

angular.module('codequizApp')

// Declaring a factory which will act as my API calls to the database.
  .service('getUser',['$resource','$rootScope',function($resource,$rootScope){

	var Users = $resource('http://localhost:3000/get-all-users/',{username: '@username'});

	// This function calls the resource with the params Front End.
	// Sets $rootScope variable for the template view to load.
	var objectOne = Users.query({username: 'Mmiller44'}, function() {
			console.log(objectOne);
		});

}]);