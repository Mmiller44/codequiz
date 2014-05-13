<?php

class Quizzes extends Eloquent {

	protected $table = 'Quizzes';
	protected $fillable = array('quiz_ID','main_category','sub_category','title','description','user_ID','quiz_ranking');
	protected $primaryKey = 'quiz_ID';
}