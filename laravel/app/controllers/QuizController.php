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
	public function addQuiz()
	{
		header('Access-Control-Allow-Origin: *');
		$addQuiz = new Quizzes;
		$addQuiz->main_category = 'Back End';
		$addQuiz->sub_category = 'PHP';
		$addQuiz->title = 'TESTING';
		$addQuiz->description = 'My test';
		$addQuiz->user_ID = 12;
		$addQuiz->quiz_ranking = '0';
		$addQuiz->save();
		// I need to return the quiz_ID of the quiz just added.
		// The front end needs to know, so it can make another API call to the questions Table,
		// to add questions for this specific quiz.
	}
}