<?php

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
		$getAllTypeQuery = Quizzes::where('sub_category', '=', $category);
		return $getAllTypeQuery->get();
	}

}