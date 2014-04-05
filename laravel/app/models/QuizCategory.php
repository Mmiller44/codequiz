<?php

class QuizCategory extends Eloquent {

	protected $table = 'Quiz_category';
	protected $fillable = array('quiz_category_ID','main_category','sub_category');
}