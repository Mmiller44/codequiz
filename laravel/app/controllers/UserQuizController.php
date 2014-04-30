<?php
header('Access-Control-Allow-Origin: *');
class UserQuizController extends BaseController {

	public function index()
	{
		
	}

	// Retrieves and returns an object containing the specified users current position in the quiz.
	// Blank array if no userID and quizID of this combination are found.
	public function getPosition($userID, $quizID)
	{
		header('Access-Control-Allow-Origin: *');
		$getPosition = UserQuiz::where('quiz_ID', '=', $quizID)->where('user_ID', '=', $userID);
		$object = $getPosition->get();
		// if($object[0])
		// {
			return $object;

		// }else
		// {
		// 	$addPosition = UserQuiz;
		// 	$addPosition.user_ID;
		// 	$addPosition.quiz_ID = ;
		// }

	}

}