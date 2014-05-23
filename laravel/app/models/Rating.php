<?
class Rating extends Eloquent {
	protected $table = 'Rating';
	protected $fillable = array('id','quiz_ID','user_ID','rating','created_at','updated_at');
}