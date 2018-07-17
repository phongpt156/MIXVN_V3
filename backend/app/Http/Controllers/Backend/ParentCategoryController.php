<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\ParentCategory as ParentCategoryRequest;
use Carbon\Carbon;
use App\ParentCategory;

class ParentCategoryController extends Controller
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
    public function store(ParentCategoryRequest $request)
    {
        $parentCategory = new ParentCategory;

        $parentCategory->name = $request->input('name');
        $parentCategory->order = $request->input('order');
        $parentCategory->created_at = Carbon::now('UTC');
        $parentCategory->updated_at = Carbon::now('UTC');

        $success = $parentCategory->save();
                
        if ($success) {        
            return response()->json([
                'id' => $parentCategory->id,
                'name' => $parentCategory->name,
                'order' => $parentCategory->order
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
    public function update(ParentCategoryRequest $request, $id)
    {
        $parentCategory = ParentCategory::find($id);
        
        $parentCategory->name = $request->input('name');
        $parentCategory->order = $request->input('order');
        $parentCategory->updated_at = Carbon::now('UTC');

        $success = $parentCategory->save();
        
        if ($success) return response()->json([
            'id' => $parentCategory->id,
            'name' => $parentCategory->name,
            'order' => $parentCategory->order
        ], 200);

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
        $success = ParentCategory::destroy($id);

        if ($success) {
            return response()->json(['messages' => 'success'], 200);
        }

        return response()->json([], 401);
    }
}
