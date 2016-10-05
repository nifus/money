<?php
namespace App;

use Illuminate\Database\Eloquent\Model;


class Category extends Model
{


    protected
        $fillable = ['id', 'title'],
        $table = 'category';

    public
        $timestamps = true;

    public function Transactions(){
        return $this->belongsToMany('App\Transaction', 'category_transaction_link', 'transaction_id', 'category_id');

    }



    static function getAll(){
        return self::with('Transactions')->orderBy('title')->get();
    }


}
