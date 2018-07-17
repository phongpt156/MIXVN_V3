<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\FeatureValue as FeatureValueRequest;
use App\FeatureValue;
use Carbon\Carbon;

class FeatureValueController extends Controller
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
    public function store(FeatureValueRequest $request)
    {
        $featureValue = new FeatureValue;

        $featureValue->vi_name = $request->vi_name;
        $featureValue->dev_name = $request->dev_name;
        $featureValue->order = $request->order;
        $featureValue->active = $request->active;
        $featureValue->feature_id = $request->feature;
        $featureValue->created_at = Carbon::now('UTC');
        $featureValue->updated_at = Carbon::now('UTC');

        $success = $featureValue->save();

        if ($success) {
            return response()->json([
                'vi_name' => $featureValue->vi_name,
                'dev_name' => $featureValue->dev_name,
                'order' => $featureValue->order,
                'active' => $featureValue->active
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
    public function update(FeatureValueRequest $request, $id)
    {
        $featureValue = FeatureValue::find($id);

        $featureValue->vi_name = $request->vi_name;
        $featureValue->dev_name = $request->dev_name;
        $featureValue->order = $request->order;
        $featureValue->feature_id = $request->feature;
        $featureValue->active = $request->active;
        $featureValue->updated_at = Carbon::now('UTC');

        $success = $featureValue->save();

        if ($success) {
            return response([
                'vi_name' => $featureValue->vi_name,
                'dev_name' => $featureValue->dev_name,
                'order' => $featureValue->order,
                'feature_id' => $featureValue->feature_id,
                'active'=> $featureValue->active,
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
        $success = FeatureValue::destroy($id);

        if ($success) {
            return response()->json(['messages' => 'success'], 200);
        }

        return response()->json([], 401);
    }
}
