'use strict';

angular.module('codequizApp')
  .controller('quiz_controller',['$scope','$rootScope','getQuestions','storeAnswerFactory','$route','$resource','findUser','getQuizPosition','$cookieStore','$routeParams','$window',function ($scope,$rootScope,getQuestions,storeAnswerFactory,$route,$resource,findUser,getQuizPosition,$cookieStore,$routeParams,$window) {

    // If a user is not logged in, push them back to landing page.
    var currentUser = $cookieStore.get('providerID');
    console.log(currentUser);

    if(!currentUser)
    {
        $window.location.href = '#/'
    }

    $scope.user = $cookieStore.get('username');
    $scope.userImage = decodeURIComponent($cookieStore.get('profileImage'));


    // Setting a scope variable to be a counter for how many answers they have right.
    // if the variable doesn't exist. Make it and set it to 0;
    if(!$scope.score)
    {
        $scope.score = 0;
    }
    
    $scope.reportData = {};

    // Setting an object to equal the results from the server.
    var currentQuiz = getQuestions.query({quizID: $routeParams.quizID}, function() {
        $scope.questions = currentQuiz;
    });

    // Getting the users current position in this quiz. And then setting my scope variables to the proper values.
    // the values will change on click later and will make the view render the new data making the user traverse the quiz.
    $scope.quizPosition = getQuizPosition.query({userID: $cookieStore.get('userID'), quizID: $routeParams.quizID});
    $scope.quizPosition.$promise.then(function(data) {
        $scope.quizPosition = data;

        if($scope.quizPosition[0].completed == 'yes')
        {
            $scope.currentNumber = 0;
        }else
        {
            $scope.currentNumber = parseInt(quizPosition[0].currentNumber);
        }

         $scope.indicatorNumber = $scope.currentNumber + 1;
    });

    // Setting scope variable to be equal to the object returned from the quizServices -> getQuestions.
    $scope.userData = findUser;


    // Store the users answer. 
    // Function gets called from the view on click. Passes: 'A', 'B', 'C' or 'D'.
    $scope.saveAnswer = function(value)
    {
        var correctAnswer = $scope.questions[$scope.currentNumber].correct_answer;
        var newNumber = $scope.currentNumber;
        var finalScore = 0;

        // increment my values so the view knows new data needs to be rendered.
        $scope.currentNumber++;
        $scope.indicatorNumber++;

        // Checking their answers
        if(value == correctAnswer)
        {
            var correctInput = 'yes';
            $scope.score += 1;

        }else
        {
            var correctInput = 'no';
        }

        // Setting their score.
        finalScore = ($scope.score / $scope.questions.length) * 100;
        $rootScope.finalScore = finalScore.toFixed(0);

        // Now I know what the user answered, whether they were right, their user_ID, quiz_ID and question_ID.
        // I need to broadcast for an event to send over the data to the database.
        // I do not need to worry if the user already answered this question or not, because that logic is done in the backend.
        var sendData = storeAnswerFactory.get({userID: $cookieStore.get('userID'), 
            userQuizID: $scope.quizPosition[0].user_quiz_ID, 
            questionID: $scope.questions[newNumber].question_ID, 
            userAnswer: value, 
            correct: correctInput}, function() {
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
        var updateResource = $resource('http://codequiz.io/update-position/:userID/:quizID/:newNumber/:completed/:score', {});
        $scope.updatePosition = updateResource.get({userID: $cookieStore.get('userID'), quizID: $scope.questions[0].quiz_ID, newNumber: newNumber, completed: $scope.completed, score: finalScore});
        $scope.updatePosition.$promise.then(function(data) {
            $scope.ready = true;
        });
    }

    $scope.submitReport = function(data)
    {
        var questionID = $scope.questions[$scope.currentNumber].question_ID;
        var userID = $cookieStore.get('userID');
        var reason1 = 'None';
        var reason2 = 'None';
        var reason3 = 'None';

        $scope.reportData = angular.copy(data);

        if($scope.reportData.radio1)
        {
            reason1 = 'No correct answer is given.';
        }
        if($scope.reportData.radio2)
        {
            reason2 = 'Question is worded wrong.';
        }
        if($scope.reportData.radio3)
        {
            reason3 = 'Not fit for this category.';
        }

        var reportResource = $resource('http://codequiz.io/report-question/:questionID/:userID/:reasonOne/:reasonTwo/:reasonThree/:reasonFour');
        var data = reportResource.get({questionID: questionID, userID: userID, reasonOne: reason1, reasonTwo: reason2, reasonThree: reason3, reasonFour: $scope.reportData.custom}, function(){
            $scope.reportData.radio1 = false;
            $scope.reportData.radio2 = false;
            $scope.reportData.radio3 = false;
            $scope.reportData.custom = '';
        });
    }


}]);