<?php

class ReportedQuestions extends Eloquent {

	protected $table = 'Reported_questions';
	protected $fillable = array('id','question_ID','user_ID','reasonOne','reasonTwo','reasonThree','reasonFour');
}