<?php

// This Route runs the new-user method, inside the user controller when we type /new-user
// {id} is a Route Parameter that gets passed into the controller.
Route::get('new-user/{id}', 'UserController@test');

// This route gets all the quizzes inside the Quiz_category table
Route::get('quiz/{sub_category}', 'QuizController@getQuizzes');



// IPaddress:port number from my phone for local host on mobile device