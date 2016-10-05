<?php

Route::group(['prefix' => 'api/category'], function () {

    Route::get('/get-all', 'CategoryController@getAll');
    Route::post('/', 'CategoryController@store');
});



Route::group(['prefix' => 'api/transaction'], function () {

    Route::get('/get-all', 'TransactionController@getAll');
    Route::post('/', 'TransactionController@store');
});
