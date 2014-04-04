<?php

class QuizCategory extends Eloquent {

	// as long as the Table name is the same as the Model name, the following code is not needed.
	protected $table = 'Quiz_category';

	// This is required for Mass assignments.
	// This is necessary in order to update data with loops, etc.
	protected $fillable = array('quiz_category_ID','main_category','sub_category');

}