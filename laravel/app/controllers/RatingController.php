<?php
class RatingController extends BaseController {

	public function index()
	{
		
	}

	// This function will handle adding a quiz rating from a user to the database.
	public function rateQuiz($quizID,$userID,$rating)
	{
		// This function searches the Rating table to see if this user has already rated this quiz.
		// If they have, then it overrides the previous data.
		// Otherwise, the data is added as a new entry.
		$data = Rating::where('quiz_ID', '=', $quizID)->where('user_ID', '=', $userID);
		$existingData = $data->first();

		if(!$existingData)
		{
			$existingData = new Rating;
		}

		$existingData->quiz_ID = $quizID;
		$existingData->user_ID = $userID;
		$existingData->rating = $rating;
		$existingData->save();


		// Now that a rating has changed, I need to get the average and set the quizzes rating to this average.
		$ratingData = Rating::where('quiz_ID', '=', $quizID);
		$ratingData->get();
		$countRating = count($ratingData);
		$addNumbers = 0;
		$averageRating = 0;

		return (string)$ratingData;

		// for($i=0; $i < $countRating; $i++)
		// {
		// 	$addNumbers += $ratingData[$i].rating;
		// }

		// $averageRating = ($addNumbers / $countRating);

		// $roundedAverage = round($averageRating);

		// $quizData = Quizzes::where('quiz_ID', '=', $quizID);
		// $quizData->get();
		// $quizData->quiz_ranking = $roundedAverage;
	}

}