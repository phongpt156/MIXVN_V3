<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\ParentCategory as ParentCategoryResource;
use App\Http\Requests\Category as CategoryRequest;
use App\Category;
use Carbon\Carbon;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ParentCategoryResource::collection(\App\ParentCategory::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CategoryRequest $request)
    {
        $category = new Category;
        
        $category->name = $request->input('name');
        $category->group_id = $request->input('category_group');
        $category->active = $request->input('active');
        $category->created_at = Carbon::now('UTC');
        $category->updated_at = Carbon::now('UTC');

        $success = $category->save();

        if ($success) {
            return response()->json([
                'id' => $category->id,
                'name' => $category->name,
                'active' => $category->active
            ], 200);
        }

        return response()->json([], 401);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(CategoryRequest $request, $id)
    {
        $category = Category::find($id);

        $category->name = $request->name;
        $category->group_id = $request->category_group;
        $category->active = $request->active;
        $category->updated_at = Carbon::now('UTC');

        $success = $category->save();

        if ($success) {
            return response()->json([
                'id' => $category->id,
                'name' => $category->name,
                'group_id' => $category->group_id,
                'active' => $category->active,
            ], 200);
        }

        return response()->json([], 401);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $success = Category::destroy($id);

        if ($success) {
            return response()->json(['messages' => 'success'], 200);
        }

        return response()->json([], 401);
    }
}
