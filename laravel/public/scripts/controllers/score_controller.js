'use strict';

angular.module('codequizApp')
  .controller('score_controller',['$scope','$rootScope','$window','$cookieStore','findUser','rateQuiz', function ($scope,$rootScope,$window,$cookieStore,findUser,rateQuiz) {

  if($window.localStorage)
  {
    $scope.user = $window.localStorage.getItem('username');
    $scope.userImage = decodeURIComponent($window.localStorage.getItem('profileImage'));
    $scope.userID = $window.localStorage.getItem('userID');
    $scope.quizCategory = $window.localStorage.getItem('category');
    $window.localStorage.setItem('quizID', '');
  }else
  {
    $scope.user = $cookieStore.get('username');
    $scope.userImage = decodeURIComponent($cookieStore.get('profileImage'));
    $scope.userID = $cookieStore.get('userID');
    $scope.quizCategory = $cookieStore.get('category');
    $cookieStore.set('quizID', '');
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
    var resource = rateQuiz;
    var addNewRating = resource.get({quizID: $rootScope.quizID,userID: $scope.userID,rating: rating,});
    addNewRating.$promise.then(function(){
      // Rating was successfully added to the DB.
    });
  }

  $scope.viewAnswers = function(ID)
  {
      $rootScope.quizID = ID;
      $window.location.href = '#/answers';
  }




}]);