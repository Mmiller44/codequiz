<?php
class ReportController extends BaseController {

	public function index()
	{
		
	}

	public function addReport($questionID,$userID,$reasonOne,$reasonTwo,$reasonThree,$reasonFour)
	{
		$table = new ReportedQuestions;
		$table->question_ID = $questionID;
		$table->user_ID = $userID;
		$table->reasonOne = $reasonOne;
		$table->reasonTwo = $reasonTwo;
		$table->reasonThree = $reasonThree;
		$table->reasonFour = $reasonFour;
		$table->save();
	}

}