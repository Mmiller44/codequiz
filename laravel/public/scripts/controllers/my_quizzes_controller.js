'use strict';

angular.module('codequizApp')
  .controller('my_quizzes_controller', ['$scope','$resource','$rootScope','$routeParams','findUser','getAllByUser','$cookieStore','$window','addQuestions',function($scope, $resource, $rootScope, $routeParams,findUser,getAllByUser,$cookieStore,$window,addQuestions) {

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
		$scope.userID = $cookieStore.get('userID');
		$cookieStore.set('quizID', '');
	}

    $scope.noQuizzes = false;
    $scope.noPublish =  true;

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

	// This will use the $rootScope.title variable to make a resource call for all quizzes labeled under
	// the category that was clicked to get to this page, which is also the $routeParam.
	$scope.getQuizzes = $resource('http://codequiz.io/get-all-by/:username');
	$scope.quizData = $scope.getQuizzes.query({username: $scope.user});
	$scope.quizData.$promise.then(function(data){
		$scope.published = [];
		$scope.unpublished = [];

		if(data.length > 0)
		{
			for(var i = 0;i<data.length;i++)
			{
				data[i].quiz_ranking = parseInt(data[i].quiz_ranking);

				if(data[i].completed == 'Yes')
				{
					$scope.published.push(data[i]);
					$scope.noPublish = false;
				}else
				{
					$scope.unpublished.push(data[i]);
				}
			}
		}else 
		{
			$scope.noQuizzes = true;
		}
	});


	$scope.setQuizID = function(ID) 
	{
		$rootScope.quizID = ID;
	}

	$scope.addQuestions = function(ID)
	{
		$rootScope.quizID = ID;
		
		if($window.localStorage)
		{
			$window.localStorage.setItem('quizID', ID);
		}else
		{
			$cookieStore.set('quizID', ID);
		}

		$window.location.href = '#/contribute/';
	}

	// This is used for displaying the proper amount of stars based off the quizzes rating.
	$scope.getNumber = function(num) {
	    return new Array(num);   
	}

	// Unpublish the quiz.
	$scope.unpublish = function(quizID)
	{
		var resource = $resource('http://codequiz.io/unpublish-quiz/:quizID/:completed');
		var unpublish = resource.get({quizID: quizID, completed: 'No'});
		unpublish.$promise.then(function(success){
			$scope.quizData = $scope.getQuizzes.query({username: $scope.user});
			$scope.quizData.$promise.then(function(data){
				$scope.published = [];
				$scope.unpublished = [];
				$scope.noQuizzes = false;
	    		$scope.noPublish =  true;

				if(data.length > 0)
				{
					for(var i = 0;i<data.length;i++)
					{
						data[i].quiz_ranking = parseInt(data[i].quiz_ranking);

						if(data[i].completed == 'Yes')
						{
							$scope.published.push(data[i]);
							$scope.noPublish = false;
						}else
						{
							$scope.unpublished.push(data[i]);
						}
					}
				}else 
				{
					$scope.noQuizzes = true;
				}
			});
		});
	}	

}]);