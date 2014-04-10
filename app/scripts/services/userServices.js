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

// Declaring a factory which will call the database to find a user based on their provider_ID
  .factory('findUser',['$resource','$rootScope',function($resource,$rootScope){

	var Users = $resource('http://localhost:3000/find-specific-user/:provider_ID',{provider_ID: 'Github:34588'});

	// This function calls the resource with the params Front End.
	// Sets $rootScope variable for the template view to load.
	var userObject = Users.query({}, function() {

			// if objectOne[0] is undefined, we know a user by that provider_ID does not exist.
			if(userObject[0] === undefined)
			{
				// No user by that ID exists, and needs to be added to the database.
				console.log('No user exists');

			}else
			{
				// Setting the user $rootScope variables to match the returned data.
				console.log(userObject[0].username);
				$rootScope.firstName = userObject[0].first_name;
				$rootScope.lastName = userObject[0].last_name;
				$rootScope.providerID = userObject[0].provider_ID;
			}
		});

}])

 // Declaring a factory which will call the database to find a user based on their provider_ID
  .factory('addUser',['$resource','$rootScope',function($resource,$rootScope){

	var newUser = $resource('http://localhost:3000/add-new-user/:provider_ID/:firstName/:lastName/:username',{provider_ID: 'Github:34588'});


}]);