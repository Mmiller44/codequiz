<?php

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




// USERS

// This Route controls the login functionality for twitter.
Route::get('login-twitter/', 'UsersController@loginTwitter');

// This Route Controls login for Github.
Route::get('login-github/', 'UsersController@loginGithub');

// This Route Controls login for Google.
Route::get('login-google/', 'UsersController@loginGoogle');

// This Route Controls login for Google.
Route::get('get-all-users/', 'UsersController@getUsers');

// Finding a specific user based on provider_ID
Route::get('find-specific-user/{providerID}', 'UsersController@findUser');