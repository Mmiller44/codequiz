<?php
header('Access-Control-Allow-Origin: *');
class QuestionController extends BaseController {

	public function index()
	{
		
	}

	public function getQuestions($quizID)
	{
		header('Access-Control-Allow-Origin: *');
		$getQuiz = Questions::where('quiz_ID', '=', $quizID);
		return $getQuiz->get();
	}

}