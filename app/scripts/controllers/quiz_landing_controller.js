'use strict';

angular.module('codequizApp')
  .controller('quiz_landing_controller', ['$scope','$resource','$rootScope','$routeParams', function($scope, $resource, $rootScope, $routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  //   var imageToggle = false;
  //   $scope.imageSrc = 'images/plus.png';

		// $scope.toggleImage = function(){
		// 	console.log(this);
			
		// 	if(imageToggle)
		// 	{
		// 		$scope.imageSrc = 'images/plus.png';
		// 		imageToggle = false;
		// 	}else
		// 	{
		// 		$scope.imageSrc = 'images/minus.png';
		// 		imageToggle = true;
		// 	}
		// };

		// This will use the $rootScope.title variable to make a resource call for all quizzes labeled under
		// the category that was clicked to get to this page.
		var getTitles = $resource('http://localhost:3000/get-type-of/:category', {});
		$scope.quizTitles = getTitles.query({category: $routeParams.sub_category}, function() {
			console.log($scope.quizTitles);
		});
}]);