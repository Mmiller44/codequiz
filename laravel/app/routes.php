<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/


// This Route runs the new-user method, inside the user controller when we type /new-user
// {id} is a Route Parameter that gets passed into the controller.
Route::get('new-user/{id}', 'HomeController@test');



// IPaddress:port number from my phone for local host on mobile device