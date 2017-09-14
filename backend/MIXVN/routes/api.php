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
    Route::resource('supplier', 'Backend\SupplierController')->middleware('admin.super');
});

Route::resource('category', 'Frontend\CategoryController');
