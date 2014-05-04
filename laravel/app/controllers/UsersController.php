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
		$obj = array('login' => (string)$login);
		return $obj;
	}

	public function loginGoogle()
	{
		$login = Social::login('google');
		$obj = array('login' => (string)$login);
		return $obj;
	}

	public function getTwitterUser()
	{
		$user = Social::twitter('user');

    	$username = $user->{'screen_name'};
    	$name = $user->{'name'};
    	$providerID = $user->{'id_str'};
    	$location = $user->{'location'};
    	$profileImage = $user->{'profile_image_url'};
    	$url = $user->{'url'};

    	$data = array('username' => $username,'name' => $name, 'providerID' => $providerID,'location' => $location,'profileImage' => $profileImage,'website' => $url);

    	return $data;


	}

// USER

	// Get all users
	public function getUsers()
	{
		$obj = Users::all();
		return $obj;
	}

	// Find specific user based on provider_ID
	public function findUser($providerID)
	{
		$obj = Users::where('provider_ID', '=', $providerID);
		return $obj->get();
	}

	// Add new user into database.
	public function addUser($providerID,$username,$name,$location,$website,$profileImage)
	{
		$user = new Users;
		$user->name = $name;
		$user->provider_ID = $providerID;
		$user->username = $username;
		$user->location = $location;
		$user->website = $website;
		$user->profileImage = $profileImage;
		$user->save();

		$data = array('userInfo' => $user);
		return $data;
	}


}