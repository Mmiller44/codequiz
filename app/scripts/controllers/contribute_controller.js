'use strict';

angular.module('codequizApp')
  .controller('contribute_controller',['$scope','$window','$routeParams',function ($scope, $window, $routeParams) {

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
		// It will add the Quiz Title, Quiz Description and Quiz Category to the Quizzes Table.
		// I will get a return from the API of the added quizzes' quiz_ID. Needed to add questions.
		// I will need to inject a factory call for the contribute $resources.
		$scope.addQuiz = function(quiz)
		{
			console.log('Button Clicked');
			console.log(quiz);
		}
  }]);











