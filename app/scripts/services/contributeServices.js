'use strict';

angular.module('codequizApp')

// All factories in this page are used for the contribute functionality.

	// Declaring a factory which will act as my API calls to the database.
  .factory('addQuiz',['$resource','$rootScope','$routeParams',function($resource,$rootScope,$routeParams){

	// API call to add a quiz to Quizzes table.
	var Quizzes = $resource('http://localhost:3000/add-quiz/:quizCategory/:quizTitle/:quizDescription', {});

	// Assigning my variables to the $resource.query.
	var addingQuiz = Quizzes.query({quizCategory: $rootScope.newQuiz.category, quizTitle: $rootScope.newQuiz.title, quizDescription: $rootScope.newQuiz.description}, function() {
			return addingQuiz;
		});

	return addingQuiz;

}]);