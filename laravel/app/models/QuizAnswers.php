<?php

class QuizAnswers extends Eloquent {

	protected $table = 'Quiz_Answers';
	protected $fillable = array('quiz_answer_ID','user_ID','quiz_ID','question_ID','user_answer','correct','created_at','updated_at');
}