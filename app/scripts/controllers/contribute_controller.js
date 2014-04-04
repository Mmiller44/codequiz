'use strict';

angular.module('codequizApp')
  .controller('contribute_controller',function ($scope, $window, $routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // Setting a $scope variable to equal the window width
    // With this variable, I can now check what device the user is using.
    // Depending on the device, I change booleans, to show/hide DOM elements.
    $scope.width = $window.innerWidth;

		var checkWidth = function(width){
			if(width > 800)
			{
				$scope.desktop = true;
				$scope.mobile = false;
			}else
			{
				$scope.desktop = false;
				$scope.mobile = true;
			}
			console.log($scope.width);
		};

		// Calling my checkWidth function.
		checkWidth($scope.width);
		
		// Setting a $scope variable to always equal the route Parameter.
		// Using the function parseInt() to convert it to a number.
		// This number is used to tell the user what question they are filling in.
		$scope.routeNumber = parseInt($routeParams.number);

  });