'use strict';

angular.module('codequizApp')
  .controller('MainCtrl', ['$scope','$resource', function($scope, $resource) {

	// This $resource is calling the API to fill the home page with data from the database.
	// The data is split into either front end or back end and looped through the view.
	var Quizzes = $resource('http://localhost:3000/get-specific-category/:category', {});
	$scope.frontQuizzes = Quizzes.query({category: 'Front End'}, function() {
	});


	// This $resource is calling the API to fill the home page with data from the database.
	// The data is split into either front end or back end and looped through the view.
	$scope.backQuizzes = Quizzes.query({category: 'Back End'}, function() {
	});

	// Declaring a function that gets called from the view.
	// This function will handle loading the next page to display all the correct titles and quiz info.
	$scope.loadTitles = function(title){
		console.log(title);
		var getTitles = $resource('http://localhost:3000/get-type-of/:category', {});  		
		$scope.quiz_titles = getTitles.query({category: title}, function() {
			console.log($scope.quiz_titles);
	});

	};

}]);