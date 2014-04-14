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

	public function addQuestion($question,$a,$b,$c,$d,$correctAnswer,$quizID,$quiz_category_ID)
	{
		header('Access-Control-Allow-Origin: *');
		$addQuestion = new Questions;
		$addQuestion->question = 'LOLLY DOO';
		$addQuestion->a = 'Woot';
		$addQuestion->b = 'ot';
		$addQuestion->c = 'Wo';
		$addQuestion->d = 'Woottt';
		$addQuestion->correct_answer = 'A';
		$addQuestion->quiz_ID = 58;
		$addQuestion->quiz_category_ID = 1;
		$addQuestion->save();
	}

}