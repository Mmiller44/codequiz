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
		// Check if a user by this providerID exists in the database.
		$checkExisting = Users::where('provider_ID', '=', $providerID);
		$object = $checkExisting->first();

		// No user by that providerID exists. Save user and return data.
		if(!$object)
		{
			$user = new Users;
			$user->name = $name;
			$user->provider_ID = $providerID;
			$user->username = $username;
			$user->location = $location;
			$user->website = $website;
			$user->profileImage = $profileImage;
			$user->save();

			return $user;

		}else
		{
			// There is already a user, and now the data needs to be updated and returned.	
			$object->name = $name;
			$object->provider_ID = $providerID;
			$object->username = $username;
			$object->location = $location;
			$object->website = $website;
			$object->profileImage = $profileImage;
			$object->save();
			return $object;
		}

	}


}