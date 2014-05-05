'use strict';

angular.module('codequizApp')
  .controller('quiz_landing_controller', ['$scope','$resource','$rootScope','$routeParams','findUser',function($scope, $resource, $rootScope, $routeParams,findUser) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // Setting the images on the accordions to be the plus.png by default.
    $scope.imageSrc = 'images/plus.png';

    	// Setting a function that will swap out the image of ONLY the clicked accordion.
		$scope.toggleImage = function(){
			
			this.toggle;

			if(this.toggle)
			{
				this.imageSrc = 'images/plus.png';
				this.toggle = !this.toggle;
			}else
			{
				this.imageSrc = 'images/minus.png';
				this.toggle = !this.toggle;
			}
		};

		// This will use the $rootScope.title variable to make a resource call for all quizzes labeled under
		// the category that was clicked to get to this page, which is also the $routeParam.
		var getTitles = $resource('http://codequiz.io/get-type-of/:category', {});
		$scope.quizTitles = getTitles.query({category: $routeParams.sub_category}, function() {
			console.log($scope.quizTitles);
			$rootScope.sub_category = $routeParams.sub_category;
		});

		$scope.setQuizID = function(ID) {
			$rootScope.quizID = ID;
		}

}]);