<?
class Questions extends Eloquent {

	protected $table = 'Questions';
	protected $fillable = array('question_ID','question','a','b','c','d','correct_answer','quiz_ID');
}