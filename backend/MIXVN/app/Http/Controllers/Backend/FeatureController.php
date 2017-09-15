<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\Feature as FeatureResource;
use App\Http\Requests\Feature as FeatureRequest;
use App\Feature;
use Carbon\Carbon;

class FeatureController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return FeatureResource::collection(Feature::all()->sortBy('order')->values());
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
    public function store(FeatureRequest $request)
    {
        $feature = new Feature;

        $feature->name = $request->name;
        $feature->active = $request->active;
        $feature->order = $request->order;
        $feature->created_at = Carbon::now('UTC');
        $feature->updated_at = Carbon::now('UTC');

        $success = $feature->save();

        if ($success) {
            return response()->json([
                'name' => $feature->name,
                'active' => $feature->active,
                'order' => $feature->order
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
    public function update(FeatureRequest $request, $id)
    {
        $feature = Feature::find($id);

        $feature->name = $request->name;
        $feature->active = $request->active;
        $feature->order = $request->order;
        $feature->updated_at = Carbon::now('UTC');

        $success = $feature->save();
        
        if ($success) {
            return response()->json([
                'name' => $feature->name,
                'active' => $feature->active,
                'order' => $feature->order
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
        $success = Feature::destroy($id);

        if ($success) {
            return response()->json([
                'messages' => 'success'
            ], 200);
        }

        return response()->json([], 401);
    }
}
