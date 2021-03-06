'use strict';

angular.module('codequizApp')

// Declaring a factory which will act as my API calls to the database.
  .factory('getQuizCategory',['$resource','$rootScope','$routeParams',function($resource,$rootScope, $routeParams){

	// Establishing the $resource connection, to get specific quiz categories.
	var Quizzes = $resource('http://codequiz.io/get-specific-category/:category', {});

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
	var questionResource = $resource('http://codequiz.io/get-questions/:quizID', {});
	return questionResource;
}])


// This factory will be used to return all the quizzes that a certain user has created.
	.factory('getAllByUser',['$resource','$rootScope',function($resource,$rootScope){
		
		var getAll = $resource('http://codequiz.io/get-all-by/:username/',{});
		return getAll;

}])

// This factory gets the users position in the quiz that was clicked, if they have started it previously.
// Returns object to controller. If object is empty, controller handles the next API call.
	.factory('getQuizPosition',['$resource','$cookieStore','$routeParams','$rootScope',function($resource,$cookieStore,$routeParams,$rootScope){
		
		var getPosition = $resource('http://codequiz.io/get-position/:userID/:quizID',{});
		return getPosition;

}])

	.factory('storeAnswerFactory',['$resource','$rootScope',function($resource,$rootScope){

		// API call to add a quiz to Quizzes table.
		var answerAPI = $resource('http://codequiz.io/store-answer/:userID/:userQuizID/:questionID/:userAnswer/:correct/:score', {});
		return answerAPI;
}])

	.factory('rateQuiz',['$resource',function($resource){

		return $resource('http://codequiz.io/rate-quiz/:quizID/:userID/:rating');

}]);










