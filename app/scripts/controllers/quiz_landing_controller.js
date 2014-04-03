'use strict';

angular.module('codequizApp')
  .controller('quiz_landing_controller', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var imageToggle = false;
    $scope.imageSrc = 'images/plus.png';

		$scope.toggleImage = function(){
			console.log(this);
			
			if(imageToggle)
			{
				$scope.imageSrc = 'images/plus.png';
				imageToggle = false;
			}else
			{
				$scope.imageSrc = 'images/minus.png';
				imageToggle = true;
			}
		};
  });