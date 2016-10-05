<?php

namespace App\Http\Controllers;


use App\Transaction ;
use Illuminate\Http\Request;


class transactionController extends Controller
{
    function getAll(){
        $cats = Transaction::getAll();
        return response()->json($cats->toArray());
    }

    function store(Request $request){
        $data = $request->all();

        $transaction = Transaction::create($data);
        if (isset($data['categories'])){
            $transaction->syncCategories($data['categories']);
        }

        return response()->json(['success'=>true,'transaction'=>$transaction->toArray()]);
    }
}
