'use strict';

angular.module('codequizApp')
  .controller('contribute_landing_controller',['$scope','$window','$routeParams','$rootScope','addQuiz','$cookieStore','$resource','findUser',function ($scope, $window, $routeParams,$rootScope,addQuiz,$cookieStore,$resource,findUser) {

	if($window.localStorage)
	{
		$scope.user = $window.localStorage.getItem('username');
		$scope.userImage = decodeURIComponent($window.localStorage.getItem('profileImage'));
		$scope.userID = $window.localStorage.getItem('userID');
		$scope.quizID = $window.localStorage.getItem('quizID');
	}else
	{
		$scope.user = $cookieStore.get('username');
		$scope.userImage = decodeURIComponent($cookieStore.get('profileImage'));
		$scope.userID = $cookieStore.get('userID');
		$scope.quizID = $cookieStore.get('quizID');
	}

	if(!$scope.user)
	{
		$scope.loggedIn = false;
	}else
	{
		$scope.loggedIn = true;
	}

	$scope.createText = 'Create!';

	// Checking to see if there is a quiz ID set.
	// If there is, Then a resource gets called to retrieve the existing questions.
	// The input fields get set with the existing data.
	if($scope.quizID)
	{	
		var getQuizInfo = $resource('http://codequiz.io/get-quiz/:quizID/:userID/');
		var quizObject = getQuizInfo.get({quizID: $scope.quizID, userID: $scope.userID});
		quizObject.$promise.then(function(returnedQuiz){
			console.log(returnedQuiz);
			$scope.createText = 'Next';
			$scope.quiz = {
				title: returnedQuiz.title,
				description: returnedQuiz.description,
				category: returnedQuiz.sub_category
			}
		});
	}


    // Setting a $scope variable to equal the window width
    // With this variable, I can now check what device the user is using.
    // Depending on the device, I change booleans, to show/hide DOM elements.
    $scope.width = $window.innerWidth;

	var checkWidth = function(width){
		if(width > 800)
		{
			$scope.desktop = true;
			$scope.mobile = false;
		}else
		{
			$scope.desktop = false;
			$scope.mobile = true;
		}
		console.log($scope.width);
	};

	// Calling my checkWidth function.
	checkWidth($scope.width);



	// This function gets called when the continue button is clicked.
	// It creates the quiz in the DB. And also creates a new row in the Created_quiz Table.
	$scope.submitQuizInfo = function(quizObject)
	{
		// quizObject contains: .category, .title, and .description.
		// These values are determined by what the user typed in the form.
		$scope.ready = true;
		$scope.shake1 = 'none';
		$scope.shake2 = 'none';
		$scope.shake3 = 'none';

		if(quizObject)
		{
			if(!quizObject.category)
			{
				console.log('No Category');
				$scope.ready = false;
				$scope.shake1 = 'none';
				$scope.shake1 = 'shake';
			}

			if(!quizObject.title || quizObject.title.length < 3)
			{
				console.log('No Title');
				$scope.ready = false;
				$scope.shake2 = 'none';
				$scope.shake2 = 'shake';
			}

			if(!quizObject.description || quizObject.description.length < 20)
			{
				console.log('No description');
				$scope.ready = false;
				$scope.shake3 = 'none';
				$scope.shake3 = 'shake';
			}
		}else
		{
			$scope.shake1 = 'shake';
			$scope.shake2 = 'shake';
			$scope.shake3 = 'shake';
		}

		// If all the requirements have been met. Then add to DB.
		if($scope.ready)
		{
			if(quizObject.category === 'PHP' || quizObject.category === 'Python' || quizObject.category === 'ColdFusion')
			{
				$rootScope.newQuizCategoryID = 2;
			}else
			{
				$rootScope.newQuizCategoryID = 1;
			}

			if(!$scope.quizID)
			{
				// This is a new quiz and needs to be added to the database.
				// Passes all the data from the form, to the api to be added to the Quizzes Table.
				var resource = addQuiz;
				var addingQuiz = resource.get({quizCategory: quizObject.category, quizTitle: quizObject.title, quizDescription: quizObject.description, userID: $scope.userID});
				addingQuiz.$promise.then(function(data) {
					console.log(data);

					if(data.quizID)
					{
						// This will add the user and new quiz to the Created_quiz table.
						var createdQuiz = $resource('http://codequiz.io/update-contribute-position/:quizID/:userID/:currentNumber/:completed');
						var dataObject = createdQuiz.get({quizID: data.quizID, userID: $scope.userID, currentNumber: 1, completed: 'No'});
						dataObject.$promise.then(function(data){
							console.log(data);

							if($window.localStorage)
							{
								$window.localStorage.setItem('quizID', data.quiz_ID);
							}else
							{
								$cookieStore.set('quizID', data.quiz_ID);
							}

							$scope.quizID = data.quiz_ID;
							$window.location.href = '#/contribute/1';

						});
					}
				});		
			}else
			{
				//Quiz already existed and therefor just needs to be updated.
				var resource = $resource('http://codequiz.io/update-quiz/:quizID/:userID/:category/:title/:description');
				var addData = resource.get({quizID: $scope.quizID, userID: $scope.userID, category: quizObject.category, title: quizObject.title, description: quizObject.description});
				addData.$promise.then(function(successObject){

					$window.location.href = '#/contribute/1';

				});
			}
		}
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











