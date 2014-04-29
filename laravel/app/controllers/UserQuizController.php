<?php
header('Access-Control-Allow-Origin: *');
class UserQuizController extends BaseController {

	public function index()
	{
		
	}

	public function getPosition($userID, $quizID)
	{
		header('Access-Control-Allow-Origin: *');
		$getPosition = UserQuiz::where('quiz_ID', '=', $quizID)
		->where('user_ID', '=', $userID);
		return $getPosition->get();
	}

}