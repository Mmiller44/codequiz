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


    console.log(getQuestions);

    // Setting scope variable to be equal to the object returned from the quizServices -> getQuestions.
    $scope.questions = getQuestions;


    // Setting scope variable to be equal to the object returned from the quizServices -> getQuizPosition.
    $scope.quizPosition = getQuizPosition;

    // setting a scope var to parseInt, so in the view I can use parseInt on a string, and add numbers to it.
    $scope.parseInt = parseInt;




    // Store the users answer. Function gets called from the view on click. Passes: 'A', 'B', 'C' or 'D'
    $scope.saveAnswer = function(value)
    {
        console.log(value);
        var userAnswer = value;
        var correctAnswer = $scope.questions[0].correct_answer;

        // If the users answer is the same as the correct answer, they are right. Else they are wrong.
        if(userAnswer == correctAnswer)
        {
            console.log('correct answer');
        }else
        {
            console.log('wrong / not matching');
        }
    }


}]);