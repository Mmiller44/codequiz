<?php

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// QUIZZES
// Get all the quiz categories. Whether front or back end.
Route::get('get-all-quizzes/', 'QuizController@getAllQuizzes');

// Get specific quiz category, ex: front end or back end.
Route::get('get-specific-category/{main_category}', 'QuizController@getSpecificQuiz');

// Get specific sub category, ex: Javascript, CSS, HTML.
// It uses a route Param to query the database with the route Param
Route::get('get-sub-category/{sub_category}', 'QuizController@getQuizSubCategory');

// Gets all quizzes that are in the same sub_category.
// This will get called to fill the data for the page that displays all javascript pages.
Route::get('get-type-of/{sub_category}', 'QuizController@getQuizType');

// Get all quizzes created by a certain user.
Route::get('get-all-by/{username}', 'QuizController@getAllBy');




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// USERS
// This Route controls the login functionality for twitter.
Route::get('login-twitter/', 'UsersController@loginTwitter');

// This Route Controls login for Github.
Route::get('login-github/', 'UsersController@loginGithub');

// Controls login for facebook.
Route::get('login-facebook/', 'UsersController@loginFacebook');

// This Route Controls login for Google.
Route::get('get-all-users/', 'UsersController@getUsers');

// Finding a specific user based on provider_ID
Route::get('find-specific-user/{providerID}', 'UsersController@findUser');

// Push new user into database.
Route::get('add-new-user/{providerID}/{username}/{name}/{location}/{website}/{profileImage}/', 'UsersController@addUser');

// Get the twitter user
Route::get('get-twitter-user/', 'UsersController@getTwitterUser');

// Get the facebook user
Route::get('get-facebook-user/', 'UsersController@getFacebookUser');


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Answers
// This route saves the users answer along with their id, the quizID, questionID and if they were right.
Route::get('store-answer/{userID}/{userQuizID}/{questionID}/{userAnswer}/{correct}', 'AnswersController@saveAnswer');




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// User_quiz
// Find specific Position in a quiz by quizID and userID.
Route::get('get-position/{userID}/{quizID}', 'UserQuizController@getPosition');
// Update the users current Number.
Route::get('update-position/{userID}/{quizID}/{newNumber}/{completed}/{score}', 'UserQuizController@updatePosition');



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// QUESTIONS
// Get all quiz questions based on quiz_ID
Route::get('get-questions/{quizID}', 'QuestionController@getQuestions');




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CONTRIBUTE
// Add Quiz
Route::get('add-quiz/{quizCategory}/{quizTitle}/{quizDescription}/{userID}', 'QuizController@addQuiz');

// Add Question to specific Quiz
Route::get('add-question/{question}/{a}/{b}/{c}/{d}/{correct_answer}/{quiz_ID}/{quiz_category_ID}/{explanation}', 'QuestionController@addQuestion');

Route::get('update-contribute-position/{quizID}/{userID}/{currentNumber}/{completed}', 'QuizController@updateContributePosition');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ReporterQuestions
// Add reports to the DB.
Route::get('report-question/{questionID}/{userID}/{reasonOne}/{reasonTwo}/{reasonThree}/{reasonFour}', 'ReportController@addReport');



