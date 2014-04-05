'use strict';

angular.module('codequizApp')
  .controller('MainCtrl', function ($scope, quizServices) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // This is my controller for the homepage of Code Quiz.
    // I will be calling my quiz_services.js to make an ajax call to my API to retrieve $scope data.
		quizServices.getAllQuizzes().then(function(foos) {
			$scope.allQuizzes = foos;
			console.log($scope.allQuizzes);
		});



  });
