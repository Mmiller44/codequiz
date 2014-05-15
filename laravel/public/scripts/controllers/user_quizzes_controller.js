'use strict';

angular.module('codequizApp')
  .controller('user_quizzes_controller', ['$scope','$resource','$rootScope','$routeParams','getAllByUser','$cookieStore',function($scope, $resource, $rootScope, $routeParams,getAllByUser,$cookieStore) {

  	// If a user is not logged in, push them back to landing page.
	var currentUser = $cookieStore.get('providerID');
	console.log(currentUser);

	if(!currentUser)
	{
		$window.location.href = '#/'
	}

	$scope.user = $cookieStore.get('username');
	$scope.userImage = decodeURIComponent($cookieStore.get('profileImage'));

  	$scope.isUser = false;
  	$scope.searchUser = $routeParams.username;
  	$scope.noUser = true;

  	$scope.published = [];

    // Setting the images on the accordions to be the plus.png by default.
    $scope.imageSrc = 'images/plus.png';

    	// Setting a function that will swap out the image of ONLY the clicked accordion.
		$scope.toggleImage = function(){
			
			this.toggle;

			if(this.toggle)
			{
				this.imageSrc = 'images/plus.png';
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

	var getAll = getAllByUser.query({username: $routeParams.username}, function() {
		$scope.quizInfo = getAll;
		console.log($scope.quizInfo);

		if($scope.quizInfo.length > 0)
		{
			for(var i = 0;i<getAll.length;i++)
			{
				if(getAll[i].completed == 'Yes')
				{
					$scope.published.push(getAll[i]);
				}
			}
			
		}else
		{

			console.log('no quizzes by that username.');
			$scope.isUser = true;
			$scope.noUser = false;
		}
	});

}]);