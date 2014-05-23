<?php
class RatingController extends BaseController {

	public function index()
	{
		
	}

	// This function will handle adding a quiz rating from a user to the database.
	public function rateQuiz($quizID,$userID,$rating)
	{
		if($rating === 'I loved it!')
		{
			$convertedRating = 4;

		}else if($rating === 'it was pretty good.')
		{
			$convertedRating = 3;

		}else if($rating === 'Could be better.')
		{
			$convertedRating = 2;

		}else
		{
			$convertedRating = 1;
		}

		$data = Rating::where('quiz_ID', '=', $quizID)->where('user_ID', '=', $userID);
		$existingData = $data->first();

		if(!$existingData)
		{
			$existingData = new Rating;
		}

		$existingData->quiz_ID = $quizID;
		$existingData->user_ID = $userID;
		$existingData->rating = $convertedRating;
		$existingData->save();

		// This function searches the Rating table to see if this user has already rated this quiz.
		// If they have, then it overrides the previous data.
		// Otherwise, the data is added as a new entry.
	}

}