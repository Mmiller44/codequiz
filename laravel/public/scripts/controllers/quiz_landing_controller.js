'use strict';

angular.module('codequizApp')
  .controller('quiz_landing_controller', ['$scope','$resource','$rootScope','$routeParams','findUser','getAllByUser','$cookieStore','$window',function($scope, $resource, $rootScope, $routeParams,findUser,getAllByUser,$cookieStore,$window) {

	if($window.localStorage)
	{
		$scope.user = $window.localStorage.getItem('username');
		$scope.userImage = decodeURIComponent($window.localStorage.getItem('profileImage'));
		$scope.userID = $window.localStorage.getItem('userID');
	}else
	{
		$scope.user = $cookieStore.get('username');
		$scope.userImage = decodeURIComponent($cookieStore.get('profileImage'));
		$scope.userID = $cookieStore.get('userID');
	}

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
		var getTitles = $resource('http://codequiz.io/get-type-of/:category', {});
		$scope.quizTitles = getTitles.query({category: $routeParams.sub_category}, function() {
			console.log($scope.quizTitles);

			$rootScope.sub_category = $routeParams.sub_category;

			var subCategory = angular.lowercase($routeParams.sub_category);
			
			if($window.localStorage)
			{
				$window.localStorage.setItem('category', subCategory)
			}else
			{
				$cookieStore.set('category', subCategory);
			}

			$scope.quiz = [];

			for(var i = 0; i< $scope.quizTitles.length; i++)
			{
				if($scope.quizTitles[i].completed === 'Yes')
				{
					$scope.quiz.push($scope.quizTitles[i]);
				}
			}

			console.log($scope.quiz);
		});

		$scope.setQuizID = function(ID) {
			$rootScope.quizID = ID;
		}

}]);