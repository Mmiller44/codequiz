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

		// If there is a currentPosition for this user, return the object
		// Else, add them to the database, and then return the newly created object.
		if($object)
		{
			return $object;
			echo "Existed";
		}else
		{
			$addPosition = new UserQuiz;
		 	$addPosition->user_ID = $userID;
		 	$addPosition->quiz_ID = $quiz_ID;
		 	$addPosition->currentNumber = 0;
		 	$addPosition->completed = 'no';
			$addPosition->save();
			echo "DID NOT Exist";
		}

	}

}