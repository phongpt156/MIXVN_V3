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

Route::group(['prefix' => 'admin', 'middleware' => ['admin']], function () {
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
    
    Route::resource('feature', 'Backend\FeatureController');
    Route::resource('feature-value', 'Backend\FeatureValueController')->middleware('admin.super');

    Route::group(['prefix' => 'item'], function () {
        Route::get('', 'Backend\ItemController@index')->middleware('admin.super');
        Route::post('', 'Backend\ItemController@store')->middleware('admin.super');
        Route::post('/{id}', 'Backend\ItemController@update')->where('id', '[0-9]+')->middleware('admin.super');
        Route::delete('/{id}', 'Backend\ItemController@destroy')->where('id', '[0-9]+')->middleware('admin.super');
        Route::get('search/{name?}', 'Backend\ItemController@search')->middleware('admin.super');
    });

    Route::group(['prefix' => 'category'], function () {
        Route::get('', 'Backend\CategoryController@index')->middleware('admin.super');;
        Route::post('', 'Backend\CategoryController@store')->middleware('admin.super');
        Route::put('/{id}', 'Backend\CategoryController@update')->middleware('admin.super')->where('id', '[0-9]+');
        Route::delete('/{id}', 'Backend\CategoryController@destroy')->middleware('admin.super')->where('id', '[0-9]+');
        Route::get('/gender/{id}', 'Backend\CategoryController@getByGender')->middleware('admin.super')->where('id', '[0-9]+');
    });

    Route::group(['prefix' => 'set'], function () {
        Route::get('', 'Backend\SetController@index');
        Route::post('', 'Backend\SetController@store');
    });
});

Route::group(['prefix' => 'category'], function () {
    Route::get('', 'Frontend\CategoryController@index');
    Route::get('/child', 'Frontend\CategoryController@getChildCategories');
});

Route::post('/login/facebook', 'Frontend\UserController@loginFacebook');

Route::group(['prefix' => 'user'], function () {
    Route::get('', 'Frontend\UserController@getUser');
});

Route::group(['prefix' => 'collection'], function () {
    Route::get('', 'Frontend\CollectionController@getCollections');
    Route::get('page/{id}', 'Frontend\CollectionController@getCollectionPage')->where('id', '[0-9]+');
});

Route::group(['prefix' => 'set'], function () {
    Route::get('/type={type}', 'Frontend\SetController@index')->where('type', '[0-9]');
    Route::get('/like/{id}', 'Frontend\SetController@like')->where('id', '[0-9]+');
    Route::post('/search', 'Frontend\SetController@search');
    Route::get('/item/{id}', 'Frontend\SetController@getSetByItem')->where('id', '[0-9]+');
});
