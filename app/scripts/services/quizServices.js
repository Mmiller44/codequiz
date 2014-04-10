'use strict';

angular.module('codequizApp')

// Declaring a factory which will act as my API calls to the database.
  .factory('getQuizCategory',['$resource','$rootScope',function($resource,$rootScope){

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
}]);