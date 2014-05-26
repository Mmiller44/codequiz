'use strict';

angular.module('codequizApp')
  .controller('quiz_landing_controller', ['$scope','$resource','$rootScope','$routeParams','findUser','getAllByUser','$cookieStore','$window',function($scope, $resource, $rootScope, $routeParams,findUser,getAllByUser,$cookieStore,$window) {

	if($window.localStorage)
	{
		$scope.user = $window.localStorage.getItem('username');
		$scope.userImage = decodeURIComponent($window.localStorage.getItem('profileImage'));
		$scope.userID = $window.localStorage.getItem('userID');
    	$window.localStorage.setItem('quizID', '');
	}else
	{
		$scope.user = $cookieStore.get('username');
		$scope.userImage = decodeURIComponent($cookieStore.get('profileImage'));
		$scope.userID = $cookieStore.set('userID');
    	$cookieStore.set('quizID', '');
	}

	if(!$scope.user)
	{
		$scope.loggedIn = false;
	}else
	{
		$scope.loggedIn = true;
	}

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

		$scope.getNumber = function(num) {
		    return new Array(num);   
		}

		// This will use the $rootScope.title variable to make a resource call for all quizzes labeled under
		// the category that was clicked to get to this page, which is also the $routeParam.
		var getTitles = $resource('http://codequiz.io/get-type-of/:category');
		$scope.quizTitles = getTitles.query({category: $routeParams.sub_category});
		$scope.quizTitles.$promise.then(function(data){

			var subCategory = angular.lowercase($routeParams.sub_category);

			if($window.localStorage)
			{
				$window.localStorage.setItem('category', subCategory)
			}else
			{
				$cookieStore.set('category', subCategory);
			}

			$scope.quiz = [];

			for(var i = 0; i<data.length; i++)
			{
				data[i].quiz_ranking = parseInt(data[i].quiz_ranking);
				
				if(data[i].completed === 'Yes')
				{
					$scope.quiz.push(data[i]);
				}
			}

			console.log($scope.quiz);
		});


		$scope.setQuizID = function(ID) {
			$rootScope.quizID = ID;
		}

}]);