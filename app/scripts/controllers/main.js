'use strict';

angular.module('codequizApp')
  .controller('MainCtrl', ['$scope','$resource','$rootScope', function($scope, $resource, $rootScope) {

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
	// The parameter for the function is being generated in the view, from the other resource calls.
	$scope.loadTitles = function(title){
		$rootScope.title = title;
	};

}]);