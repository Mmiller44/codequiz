<?
class CreatedQuiz extends Eloquent {

	protected $table = 'Created_quiz';
	protected $fillable = array('id','quiz_ID','user_ID','currentNumber','completed','created_at','updated_at');
}