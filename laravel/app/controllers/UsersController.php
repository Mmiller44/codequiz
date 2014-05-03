<?php
class UsersController extends BaseController {


	public function index()
	{
		
	}


// LOGIN 
	public function loginTwitter()
	{
		$login = Social::login('twitter');
		$obj = array('login' => (string)$login);
		return $obj;
	}

	public function loginFacebook()
	{
		$login = Social::login('facebook');
		$obj = array('login' => (string)$login);
		return $obj;
	}

	public function loginGithub()
	{
		$login = Social::login('github');
		return $login;
	}

	public function loginGoogle()
	{
		$login = Social::login('google');
		$obj = array('login' => (string)$login);
		return $obj;
	}

// USER

	// Get all users
	public function getUsers()
	{
		header('Access-Control-Allow-Origin: *');
		$obj = Users::all();
		return $obj;
	}

	// Find specific user based on provider_ID
	public function findUser($providerID)
	{
		header('Access-Control-Allow-Origin: *');
		$obj = Users::where('provider_ID', '=', $providerID);
		return $obj->get();
	}

	// Add new user into database.
	public function addUser($providerID,$firstName,$lastName,$username)
	{
		header('Access-Control-Allow-Origin: *');
		$user = new Users;
		$user->first_name = $firstName;
		$user->last_name = $lastName;
		$user->provider_ID = $providerID;
		$user->username = $username;
		$user->save();
	}


}