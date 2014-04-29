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




// This handles getting all the questions for the quiz the user clicked on.
  .factory('getQuestions',['$resource','$rootScope','$routeParams',function($resource,$rootScope,$routeParams){
	// Establishing the $resource connection.
	var questionResource = $resource('http://localhost:3000/get-questions/:quizID', {});

	// Setting an object to equal the results from the server.
	var currentQuiz = questionResource.query({quizID: $routeParams.quizID}, function() {
			return currentQuiz;
		});

	return currentQuiz;
}])



// This factory gets the users position in the quiz that was clicked, if they have started it previously.
// Returns object to controller. If object is empty, controller handles the next API call.
	.factory('getQuizPosition',['$resource','$rootScope','$routeParams',function($resource,$rootScope, $routeParams){

	var getPosition = $resource('http://localhost:3000/get-position/:userID/:quizID',{});
	var quizPosition = getPosition.query({userID: 10, quizID: $routeParams.quizID}, function(){
		$rootScope.position = quizPosition;
		return quizPosition;
	});

	return quizPosition;

}]);











