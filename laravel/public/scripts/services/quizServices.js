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

	// Setting an object to equal the results from the server.
	var currentQuiz = questionResource.query({quizID: $routeParams.quizID}, function() {
			return currentQuiz;
		});

	return currentQuiz;
}])



// This factory gets the users position in the quiz that was clicked, if they have started it previously.
// Returns object to controller. If object is empty, controller handles the next API call.
	.factory('getQuizPosition',['$resource','$rootScope','$routeParams',function($resource,$rootScope, $routeParams){

	var getPosition = $resource('http://codequiz.io/get-position/:userID/:quizID',{});
	var quizPosition = getPosition.query({userID: $rootScope.userID, quizID: $routeParams.quizID}, function(){
		return quizPosition;
	});

	return quizPosition;

}])

	.factory('storeAnswerFactory',['$resource','$rootScope','$routeParams',function($resource,$rootScope, $routeParams){

	// Listening for the broadcast of addQuestionEvent.
	// Gets broadcasted from contribute_controller on form submission click.
	$rootScope.$on('storeAnswerEvent', function (event, data) {

		// API call to add a quiz to Quizzes table.
		var answerAPI = $resource('http://codequiz.io/store-answer/:userID/:userQuizID/:questionID/:userAnswer/:correct', {});

		// Assigning my variables to the $resource.query.
		var addingQuestion = Questions.get({userID: data.userID, userQuizID: data.userQuizID, questionID: data.questionID, userAnswer: data.userAnswer, correct: data.correct}, function() {
				
			});

	});

}]);










