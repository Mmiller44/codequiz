'use strict';

angular.module('codequizApp')
  .controller('user_quizzes_controller', ['$scope','$resource','$rootScope','$routeParams','getAllByUser',function($scope, $resource, $rootScope, $routeParams,getAllByUser) {

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

		$scope.setQuizID = function(ID) {
			$rootScope.quizID = ID;
		}

	var getAll = getAllByUser.query({username: username}, function() {
		console.log(getAll);
		$scope.quizInfo = getAll;
	});

}]);