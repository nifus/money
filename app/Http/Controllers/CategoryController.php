<?php

namespace App\Http\Controllers;


use App\Category ;
use Illuminate\Http\Request;


class CategoryController extends Controller
{
    function getAll(){
        $cats = Category::getAll();
        return response()->json($cats->toArray());
    }

    function store(Request $request){
        $data = $request->all();

        $cats = Category::insert();
        return response()->json($cats->toArray());
    }
}
