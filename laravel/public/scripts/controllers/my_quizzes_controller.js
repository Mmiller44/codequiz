'use strict';

angular.module('codequizApp')
  .controller('my_quizzes_controller', ['$scope','$resource','$rootScope','$routeParams','findUser','getAllByUser','$cookieStore',function($scope, $resource, $rootScope, $routeParams,findUser,getAllByUser,$cookieStore) {

  	// If a user is not logged in, push them back to landing page.
	var currentUser = $cookieStore.get('providerID');
	console.log(currentUser);

	if(!currentUser)
	{
		$window.location.href = '#/'
	}

	$scope.user = $cookieStore.get('username');
	$scope.userImage = decodeURIComponent($cookieStore.get('profileImage'));

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

		// This will use the $rootScope.title variable to make a resource call for all quizzes labeled under
		// the category that was clicked to get to this page, which is also the $routeParam.
		var getQuizzes = $resource('http://codequiz.io/get-all-by/:username');
		var quizData = getQuizzes.get({username: $scope.user}, function() {
			$scope.quizData = quizData;
		});

		$scope.setQuizID = function(ID) {
			$rootScope.quizID = ID;
		}

}]);