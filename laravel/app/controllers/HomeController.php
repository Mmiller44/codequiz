<?php

class HomeController extends BaseController {

	// This runs automatically when the controller gets targetted. (Constructor)
	public function index()
	{

	}

	// $id is the route parameter being passed in through the routes.
	public function test($id)
	{
		$test = Users::all();
		return $test;
	}

}