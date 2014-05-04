'use strict';

angular.module('codequizApp')

// GET ALL USERS
  .factory('getAllUsers',['$resource','$rootScope',function($resource,$rootScope){

	var Users = $resource('http://codequiz.io/get-all-users/');

	// Variable object to hold all the results returned.
	var objectOne = Users.query({}, function() {
			console.log(objectOne);
		});

}])

// FINDUSER based on provider_ID
  .factory('findUser',['$resource','$rootScope','$cookieStore',function($resource,$rootScope,$cookieStore){

	var Users = $resource('http://codequiz.io/find-specific-user/:provider_ID',{provider_ID: $cookieStore.get('providerID')});

	// userObject holds all returned results
	var userObject = Users.query({}, function() {

			// if objectOne[0] is undefined, we know a user by that provider_ID does not exist.
			if(userObject[0] === undefined)
			{
				// No user by that ID exists, and needs to be added to the database.
				console.log('No user exists');
				var newUser = $resource('http://codequiz.io/add-new-user/:provider_ID/:username/:name/:location/:website/:profileImage',{provider_ID: $cookieStore.get('providerID'), username: $cookieStore.get('username'),name: $cookieStore.get('name'), location: $cookieStore.get('location'), website: $cookieStore.get('website'), profileImage: $cookieStore.get('profileImage')});
				var addedUser = newUser.query({}, function(){

					console.log('user added');
					// User has now been added to the database. $rootScope variables don't need to be changed,
					// since it's the same data that was added to the database.

				});

				return addedUser;

			}else
			{
				// Setting the user $rootScope variables to match the returned data.
				return userObject;
			}
		});

	return userObject;

}]);










