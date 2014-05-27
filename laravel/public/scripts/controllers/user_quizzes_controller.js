'use strict';

angular.module('codequizApp')
  .controller('user_quizzes_controller', ['$scope','$resource','$rootScope','$routeParams','getAllByUser','$cookieStore','findUser','$window',function($scope, $resource, $rootScope, $routeParams,getAllByUser,$cookieStore,findUser,$window) {


	if($window.localStorage)
	{
		$scope.user = $window.localStorage.getItem('username');
		$scope.userImage = decodeURIComponent($window.localStorage.getItem('profileImage'));
		$scope.userID = $window.localStorage.getItem('userID');
		$window.localStorage.setItem('userID','');
	}else
	{
		$scope.user = $cookieStore.get('username');
		$scope.userImage = decodeURIComponent($cookieStore.get('profileImage'));
		$scope.userID = $cookieStore.get('userID');
		$cookieStore.set('quizID', '');
	}

	if(!$scope.user)
	{
		$scope.loggedIn = false;
	}else
	{
		$scope.loggedIn = true;
	}

  	$scope.isUser = false;
  	$scope.searchUser = $routeParams.username;
  	$scope.noUser = true;

  	$scope.published = [];

    // Setting the images on the accordions to be the plus.png by default.
    $scope.imageSrc = 'images/arrow.png';

    	// Setting a function that will swap out the image of ONLY the clicked accordion.
		$scope.toggleImage = function(){
			
			this.toggle;

			if(this.toggle)
			{
				this.imageSrc = 'images/arrow.png';
				this.toggle = !this.toggle;
			}else
			{
				this.imageSrc = 'images/minus.png';
				this.toggle = !this.toggle;
			}
		};

	$scope.setQuizID = function(ID) {
		$rootScope.quizID = ID;
	}

	var getAll = getAllByUser.query({username: $routeParams.username});
	getAll.$promise.then(function(data){
		
		$scope.quizInfo = data;

		if($scope.quizInfo.length > 0)
		{
			for(var i = 0;i<data.length;i++)
			{
				data[i].quiz_ranking = parseInt(data[i].quiz_ranking);

				if(data[i].completed == 'Yes')
				{
					$scope.published.push(data[i]);
				}
			}
			
		}else
		{

			console.log('no quizzes by that username.');
			$scope.isUser = true;
			$scope.noUser = false;
		}
	});

	// Used to display the amount of stars/rating for each quiz.
	$scope.getNumber = function(num){
		return new Array(num);
	}

	// Authorization for a Facebook account. returns a URL, which I redirect to. User signs in and authorizes.
	$scope.facebookLogin = function()
	{
		var facebook = $resource('/login-facebook');
		var returnedObject = facebook.get(function(){

			$window.location.href=returnedObject.login;
			
		});
	};

	// Authorization for a Twitter account. returns a URL, which I redirect to. User signs in and authorizes.
	$scope.twitterLogin = function()
	{
		var twitter = $resource('/login-twitter');
		var returnedObject = twitter.get(function(){

			$window.location.href=returnedObject.login;
			
		});
	}	

}]);