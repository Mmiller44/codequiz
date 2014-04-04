<?php

class QuizController extends BaseController {

	// This runs automatically when the controller gets targetted. (Constructor)
	public function index()
	{

	}

	public function getQuizzes($sub_category)
	{
		$get_quizzes = QuizCategory::all();
		return $get_quizzes;
	}

}