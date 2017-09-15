<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'admin'], function () {
    Route::post('/signin', 'Backend\AdminController@signin');
    Route::get('/info', 'Backend\AdminController@getAdmin');
    Route::resource('category', 'Backend\CategoryController')->middleware('admin.super');
    Route::resource('parent-category', 'Backend\ParentCategoryController')->middleware('admin.super');
    Route::resource('category-group', 'Backend\CategoryGroupController')->middleware('admin.super');

    Route::group(['prefix' => 'supplier'], function () {
        Route::get('', 'Backend\SupplierController@index')->middleware('admin.super');
        Route::post('', 'Backend\SupplierController@store')->middleware('admin.super');
        Route::post('/update/{id}', 'Backend\SupplierController@update')->where('id', '[0-9]+')->middleware('admin.super');
        Route::get('/delete/{id}', 'Backend\SupplierController@destroy')->where('id', '[0-9]+')->middleware('admin.super');
    });

    Route::group(['prefix' => 'collection'], function () {
        Route::get('', 'Backend\CollectionController@index')->middleware('admin.super');
        Route::post('', 'Backend\CollectionController@store')->middleware('admin.super');
        Route::post('/update/{id}', 'Backend\CollectionController@update')->where('id', '[0-9]+')->middleware('admin.super');
        Route::get('/delete/{id}', 'Backend\CollectionController@destroy')->where('id', '[0-9]+')->middleware('admin.super');
    });
    
    Route::resource('feature', 'Backend\FeatureController')->middleware('admin.super');
    Route::resource('feature-value', 'Backend\FeatureValueController')->middleware('admin.super');
});

Route::resource('category', 'Frontend\CategoryController');
