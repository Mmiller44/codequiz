<?php

class Users extends Eloquent {

	protected $table = 'Users';
	protected $fillable = array('user_ID','username','first_name','last_name','provider_ID');

	public function getReminderEmail()
	{
		return $this->email;
	}

}