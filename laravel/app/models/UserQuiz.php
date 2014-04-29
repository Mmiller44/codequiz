<?php

class UserQuiz extends Eloquent {

	protected $table = 'User_quiz';
	protected $fillable = array('user_quiz_ID','user_ID','quiz_ID','created_date','currentNumber','completed');

}