<?php
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
		->where('user_quiz_ID','=',$userQuizID)
		->where('question_ID','=',$questionID);
		$object = $checkExisting->first();

		// If data doesn't already exist, add + return the data.
		if(!$object)
		{
			$quizAnswerTable = new QuizAnswers;
			$quizAnswerTable->user_ID = $userID;
			$quizAnswerTable->user_quiz_ID = $userQuizID;
			$quizAnswerTable->question_ID = $questionID;
			$quizAnswerTable->user_answer = $userAnswer;
			$quizAnswerTable->correct = $correct;
			$quizAnswerTable->save();
			return $quizAnswerTable;

		}else
		{
			// There is already an answer, and now the answer needs to be updated and returned.	
			$object->user_answer = $userAnswer;
			$object->correct = $correct;
			$object->save();

			return $object;
		}
	}

	public function getMissed($quizID,$userID)
	{
		// This will get all questions from Questions table with the specified quiz_ID.
		// Join them to all the quiz_Answers where question_ID's match.
		// But only where the user_ID is the same as the one passed in.
		// Also only returns the data for answers that the user got wrong.
		$missedQuestions = Questions::where('quiz_ID', '=', $quizID)
		->join('Quiz_answers', 'Questions.question_ID', '=', 'Quiz_answers.question_ID')
		->where('user_ID', '=', $userID);
		$obj = $missedQuestions->get();
		$wrongArray = array();

		for($i=0;$i<=count($obj);$i++)
		{
			if($obj[$i]->correct === 'no')
			{
				$obj[$i]->question_ID = $i;
				array_push($wrongArray, $obj[$i]);
			}
		}

		return $wrongArray;

	}

}