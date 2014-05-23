'use strict';

angular.module('codequizApp')
  .controller('score_controller',['$scope','$rootScope','$window','$cookieStore','findUser','rateQuiz', function ($scope,$rootScope,$window,$cookieStore,findUser,rateQuiz) {

  if($window.localStorage)
  {
    $scope.user = $window.localStorage.getItem('username');
    $scope.userImage = decodeURIComponent($window.localStorage.getItem('profileImage'));
    $scope.userID = $window.localStorage.getItem('userID');
    $scope.quizID = $window.localStorage.getItem('quizID');
  }else
  {
    $scope.user = $cookieStore.get('username');
    $scope.userImage = decodeURIComponent($cookieStore.get('profileImage'));
    $scope.userID = $cookieStore.get('userID');
    $scope.quizID = $cookieStore.get('quizID');
  }

	$scope.duration = 1;

  if(!$rootScope.finalScore)
  {
  	$window.location.href = '#/home';

  }else if($rootScope.finalScore < 50)
  {
  	$scope.duration = 1;
  }

  $scope.addRating = function(rating)
  {
    console.log(rating);
    
    // var resource = rateQuiz;
    // var addNewRating = resource.get({quizID: $scope.quizID,userID: $scope.userID,rating: rating,});
    // addNewRating.$promise.then(function(){
    //   // Rating was successfully added to the DB.
    //   // Now the quiz ranking needs to be changed / updated.


    // });

  }




}]);