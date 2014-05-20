<?php

class QuestionController extends BaseController {

	public function index()
	{
		
	}

	public function getQuestions($quizID)
	{
		$getQuiz = Questions::where('quiz_ID', '=', $quizID);
		return $getQuiz->get();
	}

	// Adds the question to the database with the specific quiz_ID.
	// -- First it instantiates a new instance of my Table Questions.
	// -- Then sets values to all the columns via the route Params.
	// -- Lastly, it saves them to the database.
	public function addQuestion($question,$a,$b,$c,$d,$correctAnswer,$quizID,$quiz_category_ID,$explanation)
	{
		$addQuestion = new Questions;
		$regExArray = [
		',', ', ',
		'{', '{ ',
		'}', '} ',
		'[', '[ ',
		']', '] ',
		';', '; '
		];
		
		for ($i=0; $i < $regExArray.length; $i++)
		{ 
			$ReplaceQuestion = str_replace($regExArray[i],$regExArray[i+1],$question);
		}

		$addQuestion->question = $ReplaceQuestion;
		$addQuestion->a = $a;
		$addQuestion->b = $b;
		$addQuestion->c = $c;
		$addQuestion->d = $d;
		$addQuestion->correct_answer = $correctAnswer;
		$addQuestion->quiz_ID = $quizID;
		$addQuestion->quiz_category_ID = $quiz_category_ID;
		$addQuestion->explanation = $explanation;
		$addQuestion->save();
	}

	public function editQuestion($questionID,$question,$a,$b,$c,$d,$correctAnswer,$quizID,$quizCategoryID,$explanation)
	{
		$getQuestion = Questions::where('question_ID', '=', $questionID);
		$first = $getQuestion->first();
		
		if($first)
		{
			$first->question = $question;
			$first->a = $a;
			$first->b = $b;
			$first->c = $c;
			$first->d = $d;
			$first->correct_answer = $correctAnswer;
			$first->quiz_ID = $quizID;
			$first->quiz_category_ID = $quizCategoryID;
			$first->explanation = $explanation;
			$first->save();
		}
	
	}

}