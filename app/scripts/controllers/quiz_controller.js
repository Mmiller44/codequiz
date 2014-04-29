'use strict';

angular.module('codequizApp')
  .controller('quiz_controller',['$scope','$rootScope','$routeParams','getQuestions','getQuizPosition', function ($scope,$rootScope,$routeParams,getQuestions,getQuizPosition) {

    // This is the controller that will control the functionality for Quizzes.
    // -- First it needs to know who the user is, which has been established in $rootScope variables.
    // -- Next, I need to query for the quiz that was selected on the previous screen. (quiz_ID is a $routeParam).
    // -- Set $scope variables for the view to use and load up.
    // -- When an answer is clicked, store it to this users database for this quiz.
    // -- Load same view with the next question.

    // -- Lastly, this controller needs to handle the report question modal window.
    // -- I will need to know the number of the question being reported and the reason for the report.
    // -- Also, who is submitting the report.
    // (Side note): I should probably put something in to stop users from adding more than one report per question.



    // This is the returned data containing all the questions for the quiz the user started.
    // It is an array.
    console.log(getQuestions);
    $scope.questions = getQuestions;
    console.log($rootScope.position);

}]);