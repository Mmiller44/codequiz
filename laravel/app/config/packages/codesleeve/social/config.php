<?php

return array(

	/*
	|--------------------------------------------------------------------------
	| Routing array
	|--------------------------------------------------------------------------
	|
	| This is passed to the Route::group and allows us to group and filter the
	| routes for our package
	|
	*/
	'routing' => array(
		'prefix' => '/social'
	),

	/*
	|--------------------------------------------------------------------------
	| facebook array
	|--------------------------------------------------------------------------
	|
	| Login and request things from facebook.
	|
	*/
	'facebook' => array(
		'key' => '',
		'secret' => '',
		'scopes' => array('email'),
		'redirect_url' => '/',
	),

	/*
	|--------------------------------------------------------------------------
	| twitter array
	|--------------------------------------------------------------------------
	|
	| Login and request things from twitter
	|
	*/
	'twitter' => array(
		'key' => 'MqDYBcvnzGRJNDTTsJZuw',
		'secret' => 'axedHYitphEETFBNK9h3KBsvK7a5u7yh2CEg1wEpJt4',
		'scopes' => array(),
		'redirect_url' => 'http://127.0.0.1:9000/#/',
	),

	/*
	|--------------------------------------------------------------------------
	| google array
	|--------------------------------------------------------------------------
	|
	| Login and request things from google
	|
	*/
	'google' => array(
		'key' => '540235514815.apps.googleusercontent.com',
		'secret' => '540235514815@developer.gserviceaccount.com',
		'scopes' => array(),
		'redirect_url' => 'http://127.0.0.1:9000/',
	),
	
	/*
	|--------------------------------------------------------------------------
	| github array
	|--------------------------------------------------------------------------
	|
	| Login and request things from github
	|
	*/
	'github' => array(
		'key' => '6255846ed300c607fae5',
		'secret' => '266e946992314cdade6a7b6c422868a9993de4b1',
		'scopes' => array(),
		'redirect_url' => 'http://127.0.0.1:9000/',
	),

);
