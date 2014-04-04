<?php

class Users extends Eloquent {

	// as long as the Table name is the same as the Model name, the following code is not needed.
	protected $table = 'Users';

	// This is required for Mass assignments.
	// This is necessary in order to update data with loops, etc.
	protected $fillable = array('user_ID','username','first_name','last_name','provider_ID');

}