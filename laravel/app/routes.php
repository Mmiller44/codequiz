<?php

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// QUIZZES
// Get all the quiz categories. Whether front or back end.
Route::get('get-all-quizzes/', 'QuizController@getAllQuizzes');

// Get specific quiz category, ex: front end or back end.
Route::get('get-specific-category/{main_category}', 'QuizController@getSpecificQuiz');

// Get specific sub category, ex: Javascript, CSS, HTML.
Route::get('get-sub-category/{sub_category}', 'QuizController@getQuizSubCategory');

// Gets all quizzes that are in the same sub_category.
Route::get('get-type-of/{sub_category}/', 'QuizController@getQuizType');

// Get all quizzes created by a certain user.
Route::get('get-all-by/{username}', 'QuizController@getAllBy');

// Publish the quiz.
Route::get('publish-quiz/{quizID}/{completed}', 'QuizController@publishQuiz');

// Unpublish the quiz.
Route::get('unpublish-quiz/{quizID}/{completed}', 'QuizController@unpublishQuiz');

// Retrieve quiz Info -  Title, description, etc.
Route::get('get-quiz/{quizID}/{userID}', 'QuizController@getQuiz');

//Update Quiz
Route::get('update-quiz/{quizID}/{userID}/{quizCategory}/{quizTitle}/{quizDescription}', 'QuizController@updateQuiz');



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// USERS
// This Route controls the login functionality for twitter.
Route::get('login-twitter/', 'UsersController@loginTwitter');

// This Route Controls login for Github.
Route::get('login-github/', 'UsersController@loginGithub');

// Controls login for facebook.
Route::get('login-facebook/', 'UsersController@loginFacebook');

// Get all users in the database.
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
Route::get('update-question/{questionID}/{question}/{a}/{b}/{c}/{d}/{correct_answer}/{quiz_ID}/{quiz_category_ID}/{explanation}', 'QuestionController@editQuestion');

// Update the position the creator is in.
Route::get('update-contribute-position/{quizID}/{userID}/{currentNumber}/{completed}', 'QuizController@updateContributePosition');
// Return the position the creator is in.
Route::get('get-contribute-position/{quizID}/{userID}', 'QuizController@getContributePosition');


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ReporterQuestions
// Add reports to the DB.
Route::get('report-question/{questionID}/{userID}/{reasonOne}/{reasonTwo}/{reasonThree}/{reasonFour}', 'ReportController@addReport');


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Rate Quiz
// Add a rating
Route::get('rate-quiz/{quizID}/{userID}/{rating}', 'RatingController@rateQuiz');


