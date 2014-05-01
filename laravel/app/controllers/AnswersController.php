<?php
header('Access-Control-Allow-Origin: *');
class AnswersController extends BaseController {

	public function index()
	{
		
	}

	// This function will save the users answer for each question to the correct table.
	// Will need to save the answer even if they have already answered that question while taking the quiz previously.
	// This way a user can take the quizzes multiple times.
	public function saveAnswer($userID,$quizID,$questionID,$userAnswer,$correct)
	{
		$quizAnswerTable = new QuizAnswers;
		$quizAnswerTable->user_ID = $userID;
		$quizAnswerTable->quiz_ID = $quizID;
		$quizAnswerTable->question_ID = $questionID;
		$quizAnswerTable->user_answer = $userAnswer;
		$quizAnswerTable->correct = $correct;
		$quizAnswerTable->save();
	}

}