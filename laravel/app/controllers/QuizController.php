<?php
header('Access-Control-Allow-Origin: *');
class QuizController extends BaseController {

	public function index()
	{
		
	}

	// This function runs a query to returrn a JSON object of all quizzes.
	public function getAllQuizzes()
	{
		$allQuizzes = QuizCategory::all();
		return $allQuizzes;
	}

	public function getAllBy($username)
	{
		$allQuizzesBy = Users::where('username', '=', $username)
		->join('Quizzes', 'Quizzes.user_ID', '=', 'Users.user_ID');
		return $allQuizzesBy->get();
	}

	// This function gets a specific quiz Main Category, like Front End or Back End
	public function getSpecificQuiz($main_category)
	{
		$specificQuizCategory = QuizCategory::where('main_category', '=', $main_category);
		return $specificQuizCategory->get();
	}

	// This function runs a query to retrieve all sub_categories. Like Javascript, CSS, HTML
	public function getQuizSubCategory($subCategory)
	{
		$subCategoryQuery = QuizCategory::where('sub_category', '=', $subCategory);
		return $subCategoryQuery->get();
	}

	// This query returns all the quizzes that are labeled under a certain sub_category, like javascript, html, and css
	public function getQuizType($category)
	{
		$getAllTypeQuery = Quizzes::where('sub_category', '=', $category)
		->join('Users', 'Quizzes.user_ID', '=', 'Users.user_ID');
		return $getAllTypeQuery->get();
	}

	// This function gets called to add a new quiz to the database.
	// variables are called through route params.
	public function addQuiz($quizCategory, $quizTitle, $quizDescription, $userID)
	{

		$addQuiz = new Quizzes;

		// Setting an if condition to check whether the quiz should be categorised as front or back end based on sub_category.
		if($quizCategory === 'PHP' || $quizCategory === 'ColdFusion' || $quizCategory === 'Python')
		{
			$addQuiz->main_category = 'Back End';
		}else
		{
			$addQuiz->main_category = 'Front End';
		}

		$addQuiz->sub_category = $quizCategory;
		$addQuiz->title = $quizTitle;
		$addQuiz->description = $quizDescription;
		$addQuiz->user_ID = $userID;
		$addQuiz->quiz_ranking = '0';
		$addQuiz->save();

		// returning the quiz_ID of the newly added quiz, will be needed to add questions later.
		// Setting the quiz_ID to be in an array.
		// This will ensure the data stays together as one object in an array.
		$obj = array('quizID' => (string)$addQuiz->id);
		return $obj;
	}

	// This is used to track what the users position in creating a quiz is.
	public function updateContributePosition($quizID,$userID,$currentNumber,$completed)
	{
		// This checks to see if a position for this user exists. Then it updates or creates the row.
		$getPosition = CreatedQuiz::where('quiz_ID', '=', $quizID)->where('user_ID', '=', $userID);
		$object = $getPosition->first();
		$object->quiz_ID = $quizID;
		$object->user_ID = $userID;
		$object->currentNumber = $currentNumber;
		$object->completed = $completed;
		$object->save();

		return $object;
	}

}