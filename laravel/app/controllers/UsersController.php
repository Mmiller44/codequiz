<?php

class UsersController extends BaseController {


	public function index()
	{
		
	}

	public function test()
	{
		$test = Users::all();
		return $test;
	}


}