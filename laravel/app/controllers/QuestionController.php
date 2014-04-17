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

	// Adds the question to the database with the specific quiz_ID.
	// -- First it instantiates a new instance of my Table Questions.
	// -- Then sets values to all the columns via the route Params.
	// -- Lastly, it saves them to the database.
	public function addQuestion($question,$a,$b,$c,$d,$correctAnswer,$quizID,$quiz_category_ID)
	{
		header('Access-Control-Allow-Origin: *');
		$addQuestion = new Questions;
		$addQuestion->question = $question;
		$addQuestion->a = $a;
		$addQuestion->b = $b;
		$addQuestion->c = $c;
		$addQuestion->d = $d;
		$addQuestion->correct_answer = $correctAnswer;
		$addQuestion->quiz_ID = $quizID;
		$addQuestion->quiz_category_ID = $quiz_category_ID;
		$addQuestion->save();
	}

}