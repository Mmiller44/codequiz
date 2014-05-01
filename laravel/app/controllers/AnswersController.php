<?php
header('Access-Control-Allow-Origin: *');
class AnswersController extends BaseController {

	public function index()
	{
		
	}

	// This function will save the users answer for each question to the correct table.
	// Will need to save the answer even if they have already answered that question while taking the quiz previously.
	// This way a user can take the quizzes multiple times.
	public function saveAnswer($userID,$userQuizID,$questionID,$userAnswer,$correct)
	{

		$checkExisting = QuizAnswers::where('user_ID', '=', $userID)
		->where('user_quiz_ID','=',$user_quiz_ID)
		->where('question_ID','=',$questionID);
		$object = $checkExisting->get();

		// If data doesn't already exist, add the data.
		if($object->isEmpty())
		{
			$quizAnswerTable = new QuizAnswers;
			$quizAnswerTable->user_ID = $userID;
			$quizAnswerTable->user_quiz_ID = $userQuizID;
			$quizAnswerTable->question_ID = $questionID;
			$quizAnswerTable->user_answer = $userAnswer;
			$quizAnswerTable->correct = $correct;
			$quizAnswerTable->save();

		}else
		{
			// There is already an answer, and now the answer needs to be updated.	
			$object->user_answer = $userAnswer;
			$object->save();
		}
	}

}