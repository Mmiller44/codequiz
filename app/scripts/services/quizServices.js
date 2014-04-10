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

// Declaring a factory which will act as my API calls to the database.
  .factory('getQuizType',['$resource','$rootScope','$routeParams',function($resource,$rootScope,$routeParams){

	// Establishing the $resource connection, to get specific quiz categories.
	var getTitles = $resource('http://localhost:3000/get-type-of/:category', {});
	var quizTitles = getTitles.query({category: $routeParams.sub_category}, function() {
		return quizTitles;
	});

	return quizTitles;
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
}]);