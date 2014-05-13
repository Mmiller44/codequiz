'use strict';

angular.module('codequizApp')

// All factories in this page are used for the contribute functionality.

	// Declaring a factory which will act as my API calls to the database.
  .factory('addQuiz',['$resource','$rootScope', function($resource,$rootScope){

	// API call to add a quiz to Quizzes table.
	var Quizzes = $resource('http://codequiz.io/add-quiz/:quizCategory/:quizTitle/:quizDescription/:userID');
	return Quizzes;
	
}]);