<?php

class QuizController extends BaseController {

	public function index()
	{
		
	}

	public function getAllQuizzes()
	{
		$allQuizzes = QuizCategory::all();
		return $allQuizzes;
	}

}