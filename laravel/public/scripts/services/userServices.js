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

  	// Making an api call to add or update a user to my database. Data gets returned back.
	var newUser = $resource('http://codequiz.io/add-new-user/:provider_ID/:username/:name/:location/:website/:profileImage',{provider_ID: $cookieStore.get('providerID'), username: $cookieStore.get('username'),name: $cookieStore.get('name'), location: $cookieStore.get('location'), website: $cookieStore.get('website'), profileImage: $cookieStore.get('profileImage')});

	// userObject holds all returned results
	var userObject = newUser.get({}, function() {
			console.log(userObject);
			$cookieStore.put('userID',userObject.user_ID);
			return userObject;
		});

	return userObject;

}])


// Get Facebook user
  .factory('getFacebook',['$resource','$rootScope','$cookieStore','$window',function($resource,$rootScope,$cookieStore,$window){

  	// Making an api call to add or update a user to my database. Data gets returned back.
	var user = $resource('http://codequiz.io/get-facebook-user');

	// userObject holds all returned results
	var userObject = user.get(function() {
			console.log(userObject);

			if(userObject.dataInfo)
			{
				$cookieStore.put('providerID', userObject.dataInfo.id);
				$cookieStore.put('username', userObject.dataInfo.email);
				$cookieStore.put('name', userObject.dataInfo.name);
				$cookieStore.put('location', userObject.dataInfo.locale);
				$cookieStore.put('profileImage', 'none');
				$cookieStore.put('website', userObject.dataInfo.link);

				if(userObject.dataInfo.name == undefined)
				{
					$cookieStore.put('name', 'None');
				}

				if(userObject.dataInfo.locale == undefined)
				{
					$cookieStore.put('location', 'None');
				}

	  			$window.location.href = '#/home';
			}


		});
}])


// See if a Twitter user exists.
  .factory('findTwitter',['$resource','$rootScope','$cookieStore','$window',function($resource,$rootScope,$cookieStore,$window){
  	
  	// This call gets an object containing all the information for the user.
  	// I will use this info to search my own database, and add them if necessary.
	var twitterUser = $resource('/get-twitter-user/');
	var returnedUserData = twitterUser.get(function(){
		console.log('running get user.');
		console.log(returnedUserData);

		// If a user exists, push them to the home page and set rootScope variables.
		if(returnedUserData.username)
		{
			$cookieStore.put('providerID',returnedUserData.providerID);
			$cookieStore.put('username',returnedUserData.username);
			$cookieStore.put('name', returnedUserData.name);
			$cookieStore.put('location',returnedUserData.location);
			$cookieStore.put('profileImage', 'image');
			
			if(returnedUserData.website == undefined)
			{
				$cookieStore.put('website', 'None');
			}

			if(returnedUserData.name == undefined)
			{
				$cookieStore.put('name', 'None');
			}

			if(returnedUserData.location == undefined)
			{
				$cookieStore.put('location', 'None');
			}

			console.log(returnedUserData.profileImage);

  			$window.location.href = '#/home';
		}
	});

}]);










