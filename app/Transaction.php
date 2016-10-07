<?php
namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Category;

class Transaction extends Model
{


    protected
        $fillable = ['id', 'desc','price','type','created_at','updated_at'],
        $table = 'transaction';

    public
        $timestamps = true;

    public function Categories(){
        return $this->belongsToMany('App\Category', 'category_transaction_link', 'transaction_id', 'category_id');
    }


    public function syncCategories($categories){
        $ids = [];
        foreach ($categories as $cat){
            if ( !isset($cat['id']) ){
                $category = Category::create(['title'=>$cat['title']]);
                array_push($ids, $category->id);
            }else{
                array_push($ids, $cat['id']);
            }
        }
        $this->Categories()->sync($ids);

    }


    static function getAll(){
        return self::orderBy('title')->get();
    }


}
