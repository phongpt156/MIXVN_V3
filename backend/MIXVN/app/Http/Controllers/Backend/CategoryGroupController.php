<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryGroup as CategoryGroupRequest;
use App\CategoryGroup;
use Carbon\Carbon;

class CategoryGroupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
    public function store(CategoryGroupRequest $request)
    {
        $categoryGroup = new CategoryGroup;

        $categoryGroup->gender_id = $request->input('gender');
        $categoryGroup->parent_category_id = $request->input('parent_category');
        $categoryGroup->order = $request->input('order');
        $categoryGroup->created_at = Carbon::now('UTC');
        $categoryGroup->updated_at = Carbon::now('UTC');

        $success = $categoryGroup->save();
        
        $categoryGroup = CategoryGroup::where('id', $categoryGroup->id)->first();

        if ($success) {
            return response()->json([
                'id' => $categoryGroup->id,
                'gender_id' => $categoryGroup->gender_id,
                'parent_category_id' => $categoryGroup->parent_category_id,
                'order' => $categoryGroup->order
            ]);
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
    public function update(CategoryGroupRequest $request, $id)
    {
        $categoryGroup = CategoryGroup::find($id);

        $categoryGroup->gender_id = $request->input('gender');
        $categoryGroup->parent_category_id = $request->input('parent_category');
        $categoryGroup->order = $request->input('order');
        $categoryGroup->updated_at = Carbon::now('UTC');

        $success = $categoryGroup->save();
        
        if ($success) {
            return response()->json([
                'id' => $categoryGroup->id,
                'gender_id' => $categoryGroup->gender_id,
                'parent_category_id' => $categoryGroup->parent_category_id,
                'order' => $categoryGroup->order
            ]);
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
        $success = GroupCategory::destroy($id);

        if ($success) {
            return response()->json(['messages' => 'success'], 200);
        }

        return response()->json([], 401);
    }
}
