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
  .factory('findUser',['$resource','$cookieStore','$window',function($resource,$cookieStore,$window){

	if($window.localStorage)
	{
		var providerID = $window.localStorage.getItem('providerID');
		var username = $window.localStorage.getItem('username');
		var name = $window.localStorage.getItem('name');
		var location = $window.localStorage.getItem('location');
		var website = $window.localStorage.getItem('website');
		var profileImage = $window.localStorage.getItem('profileImage');
	}else
	{
		var providerID = $cookieStore.get('providerID');
		var username = $cookieStore.get('username');
		var name = $cookieStore.get('name');
		var location = $cookieStore.get('location');
		var website = $cookieStore.get('website');
		var profileImage = $cookieStore.get('profileImage');
	}

	if(!name)
	{
		$window.location.href = '#/';
	}

	// Making an api call to add or update a user to my database. Data gets returned back.
	var newUser = $resource('http://codequiz.io/add-new-user/:provider_ID/:username/:name/:location/:website/:profileImage');

	// userObject holds all returned results
	var userData = newUser.get({provider_ID: providerID, username: username, name: name, location: location, website: website, profileImage: profileImage}).$promise.then(function(userObject) {
		
		if(userObject)
		{
			if($window.localStorage)
			{
				$window.localStorage.setItem('userID', userObject.user_ID);
			}else
			{
				$cookieStore.put('userID', userObject.user_ID);
			}

		}

	});

}])


// Get Facebook user
  .factory('getFacebook',['$resource','$rootScope','$cookieStore','$window',function($resource,$rootScope,$cookieStore,$window){

  	// Making an api call to add or update a user to my database. Data gets returned back.
	var user = $resource('http://codequiz.io/get-facebook-user');

	// userObject holds all returned results
	var promise = user.get().$promise.then(function(userObject) {

			var username = userObject.dataInfo.email;
			username = username.substring(0, username.indexOf('@'));

			if($window.localStorage)
			{
				$window.localStorage.setItem('providerID', userObject.dataInfo.id);
				$window.localStorage.setItem('username', username);
				$window.localStorage.setItem('name', userObject.dataInfo.name);
				$window.localStorage.setItem('location', userObject.dataInfo.locale);
				$window.localStorage.setItem('profileImage', 'images/defaultPerson.jpg');
				$window.localStorage.setItem('website', encodeURIComponent(userObject.dataInfo.link));

				if(userObject.dataInfo.name == undefined)
				{
					$window.localStorage.setItem('name', 'None');
				}

				if(userObject.dataInfo.locale == undefined)
				{
					$window.localStorage.setItem('location', 'None');
				}
			}else
			{
				$cookieStore.put('providerID', userObject.dataInfo.id);
				$cookieStore.put('username', username);
				$cookieStore.put('name', userObject.dataInfo.name);
				$cookieStore.put('location', userObject.dataInfo.locale);
				$cookieStore.put('profileImage', 'Facebook User');
				$cookieStore.put('website', encodeURIComponent(userObject.dataInfo.link));

				if(userObject.dataInfo.name == undefined)
				{
					$cookieStore.put('name', 'None');
				}

				if(userObject.dataInfo.locale == undefined)
				{
					$cookieStore.put('location', 'None');
				}
			}

			// Nesting this resource to retrieve / store the profile image of the logged in user for facebook.
			var imageResource = $resource('https://graph.facebook.com/:userID?fields=picture.type(normal)');
			var userImage = imageResource.get({userID: userObject.dataInfo.id});
			userImage.$promise.then(function(userData){
				
				if($window.localStorage)
				{
					$window.localStorage.setItem('profileImage', encodeURIComponent(userData.picture.data.url))
				}else
				{
					var url = userData.picture.data;
					$cookieStore.put('profileImage', encodeURIComponent(userData.picture.data.url));
				}

				$window.location.href = '#/home';
			});
    });
}])


// See if a Twitter user exists.
  .factory('findTwitter',['$resource','$rootScope','$cookieStore','$window',function($resource,$rootScope,$cookieStore,$window){
  	
  	// This call gets an object containing all the information for the user.
  	// I will use this info to search my own database, and add them if necessary.
	var twitterUser = $resource('/get-twitter-user/');
	var returnedUserData = twitterUser.get().$promise.then(function(userObject) {

		if($window.localStorage)
		{
			$window.localStorage.setItem('providerID', userObject.providerID);
			$window.localStorage.setItem('username', userObject.username);
			$window.localStorage.setItem('name', userObject.name);
			$window.localStorage.setItem('location', userObject.location);
			$window.localStorage.setItem('profileImage', encodeURIComponent(userObject.profileImage));
			$window.localStorage.setItem('website', encodeURIComponent(userObject.website));

			if(userObject.name == undefined)
			{
				$window.localStorage.setItem('name', 'None');
			}

			if(userObject.locale == undefined)
			{
				$window.localStorage.setItem('location', 'None');
			}

			if(userObject.website == undefined)
			{
				$window.localStorage.setItem('website', 'None');
			}

		}else
		{
			$cookieStore.put('providerID',userObject.providerID);
			$cookieStore.put('username',userObject.username);
			$cookieStore.put('name', userObject.name);
			$cookieStore.put('location',userObject.location);
			$cookieStore.put('profileImage', encodeURIComponent(userObject.profileImage));
			
			if(userObject.website == undefined)
			{
				$cookieStore.put('website', 'None');
			}

			if(userObject.name == undefined)
			{
				$cookieStore.put('name', 'None');
			}

			if(userObject.location == undefined)
			{
				$cookieStore.put('location', 'None');
			}

			if(userObject.profileImage == undefined)
			{
				$cookieStore.put('profileImage', 'images/defaultPerson.jpg');
			}

		}

  			$window.location.href = '#/home';

	});

}]);










