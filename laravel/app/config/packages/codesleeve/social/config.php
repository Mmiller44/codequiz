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
		'key' => '512385565533608',
		'secret' => '9590f270e0081307913f3e376df2ff14',
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
		'redirect_url' => '/',
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
		'key' => '540235514815-0p0uie0np95ehai8pr8mj2heq8vt8shq.apps.googleusercontent.com',
		'secret' => 'LMeBeDWznWYLSMn-qRbp0bb-',
		'scopes' => array(),
		'redirect_url' => '/',
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
		'secret' => '9fa9d185aa932be99d49b79ac9958a5ad0f6341e',
		'scopes' => array(),
		'redirect_url' => '/',
	),

);
