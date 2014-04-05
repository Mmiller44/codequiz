<?php

// Get all users.
Route::get('get-users/', 'UsersController@test');

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