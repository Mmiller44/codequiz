'use strict';

angular.module('codequizApp')

// All factories in this page are used for the contribute functionality.

	// Declaring a factory which will act as my API calls to the database.
  .factory('addQuiz',['$resource','$rootScope', function($resource,$rootScope){

	// Listening for the broadcast of addQuizEvent.
	// Gets broadcasted from contribute_controller on form submission click.
	$rootScope.$on('addQuizEvent', function (event, args) {

		// API call to add a quiz to Quizzes table.
		var Quizzes = $resource('http://codequiz.io/add-quiz/:quizCategory/:quizTitle/:quizDescription/:userID', {}, {newQuiz: {method: 'get', isArray: false}});

		// Assigning my variables to the $resource.query.
		var addingQuiz = Quizzes.newQuiz({quizCategory: args.category, quizTitle: args.title, quizDescription: args.description, userID: args.userID}, function() {
				
				// This is the quiz_ID of the quiz just pushed to the DB.
				console.log(addingQuiz.quizID);
				$rootScope.quizID = addingQuiz.quizID;

				if(addingQuiz.quizID)
				{
					// This will add the user and new quiz to the Created_quiz table.
					var createdQuiz = $resource('http://codequiz.io/update-contribute-position/:quizID/:userID/:currentNumber/:completed');
					var dataObject = createdQuiz.get({quizID: addingQuiz.quizID, userID: args.userID, currentNumber: 1, completed: 'No'}, function(){
						console.log(dataObject);
					});	
				}


			});

	});

}]);