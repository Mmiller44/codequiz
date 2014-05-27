'use strict';

angular.module('codequizApp')
  .controller('contribute_controller',['$scope','$window','$routeParams','$rootScope','addQuiz','$cookieStore','$resource',function ($scope, $window, $routeParams,$rootScope,addQuiz,$cookieStore,$resource) {

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
		$window.location.href="#/";
	}

	$scope.createText = 'Create!';

	// Checking to see if there is a quiz ID set.
	// If there is, Then a resource gets called to retrieve the existing questions.
	// The input fields get set with the existing data.
	if($scope.quizID)
	{	
		$scope.createText = 'Next';
		var getQuestions = $resource('http://codequiz.io/get-questions/:quizID');
		$scope.getQuestions = getQuestions.query({quizID: $scope.quizID});
		$scope.getQuestions.$promise.then(function(data){
			var currentNumber = $scope.routeNumber - 1;
			if(data[currentNumber])
			{
				$scope.question = {
					a: data[currentNumber].a,
					b: data[currentNumber].b,
					c: data[currentNumber].c,
					d: data[currentNumber].d,
					correctAnswer: data[currentNumber].correct_answer,
					explanation: data[currentNumber].explanation,
					text: data[currentNumber].question
				};
				$scope.questionID = data[currentNumber].question_ID;
				$scope.existingQuestion = true;
				console.log(data);
			}else
			{
				$scope.existingQuestion = false;
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

	if($scope.routeNumber > 1)
	{
		$scope.back = true;
	}else
	{
		$scope.back = false;
	}

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
		}
	}

	$scope.storeQuestion = function(question)
	{
		if(question)
		{
			if(question.text && question.a && question.b && question.c && question.d && question.correctAnswer)
			{
				// This is the data the user entered for the question.
				// It contains: .text, .a, .b, .c, .d, .correctAnswer and explanation;
				console.log(question);

				// Update the table to reflect how many questions they have entered.
				var createdQuiz = $resource('http://codequiz.io/update-contribute-position/:quizID/:userID/:currentNumber/:completed');
				var dataObject = createdQuiz.get({quizID: $scope.quizID, userID: $scope.userID, currentNumber: $scope.routeNumber, completed: 'No'});
				dataObject.$promise.then(function(data){
					$scope.currentNumber = data.currentNumber;
				});

				if(!$scope.existingQuestion)
				{
					// Now I need to store the actual question.
					var addQuestion = $resource('http://codequiz.io/add-question/:question/:a/:b/:c/:d/:correctAnswer/:quizID/:quizCategoryID/:explanation');
					var QuestionObject = addQuestion.get({question: encodeURIComponent(question.text), a: encodeURIComponent(question.a), b: encodeURIComponent(question.b), c: encodeURIComponent(question.c), d: encodeURIComponent(question.d), correctAnswer: question.correctAnswer, quizID: $scope.quizID, quizCategoryID: 1, explanation: encodeURIComponent(question.explanation)});
					QuestionObject.$promise.then(function(data){
						$scope.routeNumber++;
						$window.location.href = '#/contribute/' + $scope.routeNumber;
					});						
				}else
				{
					var addQuestion = $resource('http://codequiz.io/update-question/:questionID/:question/:a/:b/:c/:d/:correctAnswer/:quizID/:quizCategoryID/:explanation');
					var QuestionObject = addQuestion.get({questionID: $scope.questionID,question: encodeURIComponent(question.text), a: encodeURIComponent(question.a), b: encodeURIComponent(question.b), c: encodeURIComponent(question.c), d: encodeURIComponent(question.d), correctAnswer: question.correctAnswer, quizID: $scope.quizID, quizCategoryID: 1, explanation: encodeURIComponent(question.explanation)});
					QuestionObject.$promise.then(function(data)
					{
						$scope.routeNumber++;
						$window.location.href = '#/contribute/' + $scope.routeNumber;
					});			
				}

			}
		}
	}
	

	// This gets triggered when a user clicks submit.
	// It will change the 'completed' column from no to yes. Allowing all users to see the quiz.
	$scope.publishQuiz = function()
	{
		var publishResource = $resource('http://codequiz.io/publish-quiz/:quizID/:completed');
		var returnedObject = publishResource.get({quizID: $scope.quizID, completed: 'Yes'},function(){
			console.log(returnedObject);
			if($window.localStorage)
			{
				$window.localStorage.setItem('quizID', '');
			}else
			{
				$cookieStore.set('quizID', '');
			}
			
			$window.location.href = "#contribute/";
		});
	}

  }]);











