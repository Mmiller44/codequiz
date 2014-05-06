<?php

class Users extends Eloquent {

	protected $table = 'Users';
	protected $fillable = array('user_ID','username','name','provider_ID','profileImage','location','website');
	protected $primaryKey = 'user_ID';

}