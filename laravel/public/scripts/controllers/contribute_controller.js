'use strict';

angular.module('codequizApp')
  .controller('contribute_controller',['$scope','$window','$routeParams','$rootScope','addQuiz','$cookieStore','$resource',function ($scope, $window, $routeParams,$rootScope,addQuiz,$cookieStore,$resource) {

  	// If a user is not logged in, push them back to landing page.
	var currentUser = $cookieStore.get('providerID');
	console.log(currentUser);

	if(!currentUser)
	{
		$window.location.href = '#/'
	}

	$scope.user = $cookieStore.get('username');
	$scope.userImage = decodeURIComponent($cookieStore.get('profileImage'));

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

		// Setting a $scope variable to always equal the route Parameter.
		// Using the function parseInt() to convert it to a number.
		// This number is used to tell the user what question they are filling in.
		$scope.routeNumber = parseInt($routeParams.number);

		// If the routenumber is greater than or equal to 10, and less than or equal to 20.
		if($scope.routeNumber >= 10 && $scope.routeNumber <= 20)
		{
			$scope.showSubmit = false;
		}else
		{
			$scope.showSubmit = true;
		}

		// routeNumber is greater than or equal to 20, so hide the continue button and only offer submit.
		if($scope.routeNumber >= 20)
		{
			$scope.hideContinue = true;
		}else
		{
			$scope.hideContinue = false;
		}

		// This function gets called when the continue button is clicked.
		// It creates the quiz in the DB. And also creates a new row in the Created_quiz Table.
		$scope.submitQuizInfo = function(quizObject)
		{
			// quizObject contains: .category, .title, and .description.
			// These values are determined by what the user typed in the form.
			console.log(quizObject);

			if(quizObject.category === 'PHP' || quizObject.category === 'Python' || quizObject.category === 'ColdFusion')
			{
				$rootScope.newQuizCategoryID = 2;
			}else
			{
				$rootScope.newQuizCategoryID = 1;
			}

			// Passes all the data from the form, to the api to be added to the Quizzes Table.
			var userID = $cookieStore.get('userID');
			var resource = addQuiz;
			var addingQuiz = resource.get({quizCategory: quizObject.category, quizTitle: quizObject.title, quizDescription: quizObject.description, userID: userID}, function() {

					if(addingQuiz.quizID)
					{
						// This will add the user and new quiz to the Created_quiz table.
						var createdQuiz = $resource('http://codequiz.io/update-contribute-position/:quizID/:userID/:currentNumber/:completed');
						var dataObject = createdQuiz.get({quizID: addingQuiz.quizID, userID: userID, currentNumber: 1, completed: 'No'}, function(){
							console.log(dataObject);
				
							// This will only allow the user to move to the next page if they have submitted all the data.
							if(quizObject.title && quizObject.category && quizObject.description)
							{
								console.log($rootScope.newQuizData);
								$window.location.href = '#/contribute/' + dataObject.currentNumber;
							}

						});	
					}

			});

		}

		$scope.storeQuestion = function(question)
		{
			// This is the data the user entered for the question.
			// It contains: .text, .a, .b, .c, .d, .correctAnswer;
			console.log(question);

			// I can store the question on every button click now because it won't be published until I set
			// the completed part to say Yes. 
		}

		$scope.viewAllQuizzes = function()
		{

		}

  }]);











