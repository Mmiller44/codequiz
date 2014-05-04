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
  .factory('findUser',['$resource','$rootScope',function($resource,$rootScope){

	var Users = $resource('http://codequiz.io/find-specific-user/:provider_ID',{provider_ID: 'Github:00007'});

	// userObject holds all returned results
	var userObject = Users.query({}, function() {

			// if objectOne[0] is undefined, we know a user by that provider_ID does not exist.
			if(userObject[0] === undefined)
			{
				// No user by that ID exists, and needs to be added to the database.
				console.log('No user exists');
				var newUser = $resource('http://codequiz.io/add-new-user/:provider_ID/:firstName/:lastName/:username',{provider_ID: 'Github:00007',firstName: 'Harrison',lastName: 'Ford', username: 'indianaJones'});
				var addedUser = newUser.query({}, function(){

					console.log('user added');
					// User has now been added to the database. $rootScope variables don't need to be changed,
					// since it's the same data that was added to the database.
				});

			}else
			{
				// Setting the user $rootScope variables to match the returned data.
				console.log(userObject[0].username);
				$rootScope.firstName = userObject[0].first_name;
				$rootScope.lastName = userObject[0].last_name;
				$rootScope.providerID = userObject[0].provider_ID;
				$rootScope.userID = userObject[0].user_ID;
			}
		});

}]);










