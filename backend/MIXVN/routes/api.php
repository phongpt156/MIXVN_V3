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
    Route::resource('parent-category', 'Backend\ParentCategoryController')->middleware('admin.super');

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

    Route::group(['prefix' => 'product'], function () {
        Route::get('', 'Backend\ProductController@index')->middleware('admin.super');
        Route::post('', 'Backend\ProductController@store')->middleware('admin.super');
        Route::post('/{id}', 'Backend\ProductController@update')->where('id', '[0-9]+')->middleware('admin.super');
        Route::delete('/{id}', 'Backend\ProductController@destroy')->where('id', '[0-9]+')->middleware('admin.super');
        Route::get('search/{name?}', 'Backend\ProductController@search')->middleware('admin.super');
    });

    Route::group(['prefix' => 'category'], function () {
        Route::get('', 'Backend\CategoryController@index')->middleware('admin.super');
        Route::post('', 'Backend\CategoryController@store')->middleware('admin.super');
        Route::put('/{id}', 'Backend\CategoryController@update')->middleware('admin.super')->where('id', '[0-9]+');
        Route::delete('/{id}', 'Backend\CategoryController@destroy')->middleware('admin.super')->where('id', '[0-9]+');
    });

    Route::group(['prefix' => 'category-group'], function () {
        Route::get('', 'Backend\CategoryGroupController@index')->middleware('admin.super');
        Route::post('', 'Backend\CategoryGroupController@store')->middleware('admin.super');
        Route::put('/{id}', 'Backend\CategoryGroupController@update')->middleware('admin.super')->where('id', '[0-9]+');
        Route::delete('/{id}', 'Backend\CategoryGroupController@destroy')->middleware('admin.super')->where('id', '[0-9]+');
        Route::get('/gender/{genderId}', 'Backend\CategoryGroupController@getGenderCategoryGroups')->where('genderId', '[0-9]+');
    });

    Route::group(['prefix' => 'product-group'], function () {
        Route::get('', 'Backend\ProductGroupController@index');
        Route::post('', 'Backend\ProductGroupController@store');
    });
});

Route::resource('category', 'Frontend\CategoryController');
