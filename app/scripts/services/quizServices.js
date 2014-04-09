'use strict';

angular.module('codequizApp')

// Declaring a factory which will act as my API calls to the database.
  .factory('getQuizCategory',['$resource','$rootScope',function($resource,$rootScope){

  	// Establishing the $resource connection, the next two functions will use this resource.
	var Quizzes = $resource('http://localhost:3000/get-specific-category/:category', {});

	// This function calls the resource with the params Front End.
	// Sets $rootScope variable for the template view to load.
		var objectOne = Quizzes.query({category: 'Front End'}, function() {
			$rootScope.frontQuizzes = objectOne;
			console.log($rootScope.frontQuizzes);
		});

	// This function calls the resource with the params Back End. 
	// Sets $rootScope variable for the template view to load.
		var object = Quizzes.query({category: 'Back End'}, function() {
			$rootScope.backQuizzes = object;
			console.log($rootScope.backQuizzes);
		});
}]);