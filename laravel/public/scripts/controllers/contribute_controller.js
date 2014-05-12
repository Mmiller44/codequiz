'use strict';

angular.module('codequizApp')
  .controller('contribute_controller',['$scope','$window','$routeParams','$rootScope','addQuiz','$cookieStore',function ($scope, $window, $routeParams,$rootScope,addQuiz,$cookieStore) {

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
			console.log('WHAT?');
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
		// It gets passed an object called quiz. Containing all the information the user just inputted.
		// I will get a return from the API of the added quizzes' quiz_ID. Needed to add questions.
		// I will need to inject a factory call for the contribute $resources.
		$scope.submitQuizInfo = function(quizObject)
		{
			// quiz is an object containing: .category, .title, and .description.
			// These values are determined by what the user typed in the form.
			console.log(quizObject);

			if(quizObject.category === 'PHP' || quizObject.category === 'Python' || quizObject.category === 'ColdFusion')
			{
				$rootScope.newQuizCategoryID = 2;
			}else
			{
				$rootScope.newQuizCategoryID = 1;
			}

			// This will only allow the user to move to the next page if they have submitted all the data.
			if(quizObject.title && quizObject.category && quizObject.description)
			{
				$window.location.href = '#/contribute/1';
			}

			// This triggers an event inside my contributeServices -> addQuiz.
			// Passes all the data from the form, to the api to be added to the Quizzes Table.
			$rootScope.$broadcast("addQuizEvent", {category: quizObject.category,title: quizObject.title, description: quizObject.description, userID: 12});
		}

		$scope.storeQuestion = function(question)
		{
			// This is the data the user entered for the question.
			// It contains: .text, .a, .b, .c, .d, .correctAnswer;
			console.log(question);

			// Check if this is the first answer being submitted. If it is, create an empty array and push the object.
			// Otherwise just push the question into the array. Then I can check the length before storing the data in DB.
			if($scope.dataArray)
			{
				$scope.dataArray.push(question);
				console.log($scope.dataArray);
			}else
			{
				$scope.dataArray = [];
				$scope.dataArray.push(question);
			}

		}
  }]);











