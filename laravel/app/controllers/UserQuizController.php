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

		// If $object is empty, add the userID, quizID and currentNumber of 0 to the table.
		// Else, return their existing data.
		if($object->isEmpty())
		{
			$addPosition = new UserQuiz;
		 	$addPosition->user_ID = $userID;
		 	$addPosition->quiz_ID = $quizID;
		 	$addPosition->currentNumber = 0;
		 	$addPosition->completed = 'no';
			$addPosition->save();

			// New data has successfully been added to the table, now return this back to the front end.
			$Newobject = $getPosition->get();
			return $Newobject;

		}else
		{
			return $object;
		}

	}

	// Find the users position, and then update with the new number passed in.
	public function updatePosition($userID, $quizID, $newNumber,$completed)
	{
		$getPosition = UserQuiz::where('quiz_ID', '=', $quizID)->where('user_ID', '=', $userID);
		$object = $getPosition->first();

		$object->currentNumber = $newNumber;
		$object->completed = $completed;
		$object->save();
		return $object;
	}

}