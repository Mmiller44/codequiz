'use strict';

angular.module('codequizApp')

// Declaring a factory which will act as my API calls to the database.
  .factory('getQuizCategory',['$resource','$rootScope','$routeParams',function($resource,$rootScope, $routeParams){

	// Establishing the $resource connection, to get specific quiz categories.
	var Quizzes = $resource('http://localhost:3000/get-specific-category/:category', {});

	// -- Queries the resource for all Front End quiz categories.
	// -- Sets $rootScope variable for the template view to load.
	var objectOne = Quizzes.query({category: 'Front End'}, function() {
			$rootScope.frontQuizzes = objectOne;
		});

	// -- Queries the resource for all Back End quiz categories.
	// -- Sets $rootScope variable for the template view to load.
	var object = Quizzes.query({category: 'Back End'}, function() {
			$rootScope.backQuizzes = object;
		});
}])

  // Declaring a second factory. This one handles getting all the questions for the quiz the user started.
  .factory('getQuestions',['$resource','$rootScope','$routeParams',function($resource,$rootScope,$routeParams){
	// Establishing the $resource connection.
	var questionResource = $resource('http://localhost:3000/get-questions/:quizID', {});

	// Setting an object to equal the results from the server.
	var currentQuiz = questionResource.query({quizID: $routeParams.quizID}, function() {
			return currentQuiz;
		});

	return currentQuiz;
}])

	// This factory gets the users position in the quiz that was clicked.
	// I will need to have a fallback for if this object is empty, meaning they haven't ever started this quiz.
	// Default number will need to be set to one.
	// With this number, I now will know what question(s) they still need to answer.
	.factory('getQuizPosition',['$resource','$rootScope','$routeParams',function($resource,$rootScope, $routeParams){

	var getPosition = $resource('http://localhost:3000/get-position/:userID/:quizID',{});
	var quizPosition = getPosition.query({userID: 20, quizID: $routeParams.quizID}, function(){
		$rootScope.position = quizPosition;
		return quizPosition;
	});

	return quizPosition;
	
}]);