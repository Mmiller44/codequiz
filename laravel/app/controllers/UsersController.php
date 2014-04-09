<?php

header('Access-Control-Allow-Origin: *');
class UsersController extends BaseController {


	public function index()
	{
		
	}


// LOGIN 
	public function loginTwitter()
	{
		header('Access-Control-Allow-Origin: *');
		$login = Social::login('twitter');
		$obj = array('login' => (string)$login);;
		return $obj;
	}

	public function loginGithub()
	{
		header('Access-Control-Allow-Origin: *');
		$login = Social::login('github');
		$obj = array('login' => (string)$login);;
		return $obj;
	}

	public function loginGoogle()
	{
		header('Access-Control-Allow-Origin: *');
		$login = Social::login('google');
		$obj = array('login' => (string)$login);;
		return $obj;
	}

// USER
	public function getUsers()
	{
		header('Access-Control-Allow-Origin: *');
		$obj = Users::all();
		return $obj;
	}

	public function findUser($providerID)
	{
		header('Access-Control-Allow-Origin: *');
		$obj = Users::where('provider_ID', '=', $providerID);
		return $obj->get();
	}

}