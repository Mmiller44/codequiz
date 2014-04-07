'use strict';

angular.module('codequizApp')
  .controller('MainCtrl', ['$scope','$resource', function($scope, $resource) {

  	// This $resource is calling the API to fill the home page with data from the database.
  	// The data is split into either front end or back end and looped through the view.
 	var Quizzes = $resource('http://localhost:3000/get-specific-category/:category', {});
  	$scope.front_quizzes = Quizzes.query({category: 'Front End'}, function() {
  });


  	// This $resource is calling the API to fill the home page with data from the database.
  	// The data is split into either front end or back end and looped through the view.
  	$scope.back_quizzes = Quizzes.query({category: 'Back End'}, function() {
  });


}]);
