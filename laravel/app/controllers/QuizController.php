<?php
header('Access-Control-Allow-Origin: *');
class QuizController extends BaseController {

	public function index()
	{
		
	}

	// This function runs a query to returrn a JSON object of all quizzes.
	public function getAllQuizzes()
	{
		header('Access-Control-Allow-Origin: *');
		$allQuizzes = QuizCategory::all();
		return $allQuizzes;
	}

	// This function gets a specific quiz Main Category, like Front End or Back End
	public function getSpecificQuiz($main_category)
	{
		header('Access-Control-Allow-Origin: *');
		$specificQuizCategory = QuizCategory::where('main_category', '=', $main_category);
		return $specificQuizCategory->get();
	}

	// This function runs a query to retrieve all sub_categories. Like Javascript, CSS, HTML
	public function getQuizSubCategory($subCategory)
	{
		header('Access-Control-Allow-Origin: *');
		$subCategoryQuery = QuizCategory::where('sub_category', '=', $subCategory);
		return $subCategoryQuery->get();
	}

	// This query returns all the quizzes that are labeled under a certain sub_category, like javascript, html, and css
	public function getQuizType($category)
	{
		header('Access-Control-Allow-Origin: *');
		$getAllTypeQuery = Quizzes::where('sub_category', '=', $category)
		->join('Users', 'Quizzes.user_ID', '=', 'Users.user_ID');
		return $getAllTypeQuery->get();
	}

	// This function gets called to add a new quiz to the database.
	// variables are called through route params.
	public function addQuiz($quizCategory, $quizTitle, $quizDescription, $userID)
	{
		header('Access-Control-Allow-Origin: *');

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
}