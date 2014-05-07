'use strict';

angular.module('codequizApp')
  .controller('quiz_controller',['$scope','$rootScope','getQuestions','storeAnswerFactory','$route','$resource','findUser','getQuizPosition','$cookieStore','$routeParams','$window',function ($scope,$rootScope,getQuestions,storeAnswerFactory,$route,$resource,findUser,getQuizPosition,$cookieStore,$routeParams,$window) {

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

    
    // Setting an object to equal the results from the server.
    var currentQuiz = getQuestions.query({quizID: $routeParams.quizID}, function() {
        $scope.questions = currentQuiz;

    });

    // Setting scope variable to be equal to the object returned from the quizServices -> getQuestions.
    $scope.userData = findUser;

    // Getting the users current position in this quiz. And then setting my scope variables to the proper values.
    // the values will change on click later and will make the view render the new data making the user traverse the quiz.
    var quizPosition = getQuizPosition.query({userID: $cookieStore.get('userID'), quizID: $routeParams.quizID}, function(){
        console.log(quizPosition);
        $scope.quizPosition = quizPosition;

        if($scope.quizPosition[0].completed == 'yes')
        {
            $scope.currentNumber = 0;
        }else
        {
            $scope.currentNumber = parseInt(quizPosition[0].currentNumber);
        }

         $scope.indicatorNumber = $scope.currentNumber + 1;
         // $scope.quizCategory = $rootScope.sub_category.toLowerCase();
         // console.log($scope.quizCategory);

    });




    // Store the users answer. 
    // Function gets called from the view on click. Passes: 'A', 'B', 'C' or 'D'.
    $scope.saveAnswer = function(value)
    {
        var correctAnswer = $scope.questions[$scope.currentNumber].correct_answer;
        var newNumber = $scope.currentNumber;

        // increment my values so the view knows new data needs to be rendered.
        $scope.currentNumber++;
        $scope.indicatorNumber++;

        console.log($scope.currentNumber);
        console.log($scope.indicatorNumber);
        console.log(newNumber);

        // If the users answer is the same as the correct answer, they are right. Else they are wrong.
        if(value == correctAnswer)
        {
            var correctInput = 'yes';

        }else
        {
            var correctInput = 'no';
        }

        // Now I know what the user answered, whether they were right, their user_ID, quiz_ID and question_ID.
        // I need to broadcast for an event to send over the data to the database.
        // I do not need to worry if the user already answered this question or not, because that logic is done in the backend.
        var sendData = storeAnswerFactory.get({userID: $cookieStore.get('userID'), 
            userQuizID: $scope.quizPosition[0].user_quiz_ID, 
            questionID: $scope.questions[newNumber].question_ID, 
            userAnswer: value, correct: correctInput}, function() {
                console.log('Stored Answer');
        });
        

        // IF condition checking to see if the user has answered all the questions.
        // Will set $scope.completed to either yes or no, which is used with updateResource call.
        if(newNumber + 1 == $scope.questions.length)
        {
            $scope.completed = 'yes';
            $window.location.href = '#/score';
        }else
        {
            $scope.completed = 'no';
        }


        // The users answer has been stored. Now I need to update what currentNumber they are on.
        var updateResource = $resource('http://codequiz.io/update-position/:userID/:quizID/:newNumber/:completed', {});
        var dataObject = updateResource.get({userID: $cookieStore.get('userID'), quizID: $scope.questions[0].quiz_ID, newNumber: newNumber, completed: $scope.completed}, function() {
                console.log('Updated Position');
        });
        
    }

    $scope.reportQuestion = function()
    {
        console.log('reported');
    }


}]);