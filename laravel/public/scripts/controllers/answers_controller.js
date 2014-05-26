'use strict';

angular.module('codequizApp')
  .controller('answers_controller', ['$scope','$resource','$rootScope','$routeParams','$cookieStore','findUser','$window',function($scope, $resource, $rootScope, $routeParams,$cookieStore,findUser,$window) {


	if($window.localStorage)
	{
		$scope.user = $window.localStorage.getItem('username');
		$scope.userImage = decodeURIComponent($window.localStorage.getItem('profileImage'));
		$scope.userID = $window.localStorage.getItem('userID');
	}else
	{
		$scope.user = $cookieStore.get('username');
		$scope.userImage = decodeURIComponent($cookieStore.get('profileImage'));
		$scope.userID = $cookieStore.get('userID');
	}

    // Setting the images on the accordions to be the plus.png by default.
    $scope.imageSrc = 'images/arrow.png';

    	// Setting a function that will swap out the image of ONLY the clicked accordion.
		$scope.toggleImage = function(){
			
			this.toggle;

			if(this.toggle)
			{
				this.imageSrc = 'images/arrow.png';
				this.toggle = !this.toggle;
			}else
			{
				this.imageSrc = 'images/minus.png';
				this.toggle = !this.toggle;
			}
		};

	var allMissed = $resource('http://codequiz.io/get-missed-questions/:quizID/:userID');
	var getMissed = allMissed.query({quizID: $rootScope.quizID, userID: $scope.userID});
	getMissed.$promise.then(function(data){
			console.log(data);
	});

}]);