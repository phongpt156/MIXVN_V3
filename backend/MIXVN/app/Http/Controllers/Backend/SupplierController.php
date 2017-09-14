<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\Supplier as SupplierResource;
use App\Http\Requests\Supplier as SupplierRequest;
use App\Supplier;
use Carbon\Carbon;

class SupplierController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return SupplierResource::collection(Supplier::paginate(10));
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
    public function store(SupplierRequest $request)
    {
        $supplier = new Supplier;
        
        $supplier->name = $request->name;
        $supplier->address = $request->address;
        $supplier->facebook_link = $request->facebook_link;
        $supplier->facebook_title = $request->facebook_title;
        $supplier->instagram_link = $request->instagram_link;
        $supplier->instagram_title = $request->instagram_title;
        $supplier->background_image = $request->background_image;
        $supplier->avatar = $request->avatar;
        $supplier->active = $request->active;
        $supplier->created_at = Carbon::now('UTC');
        $supplier->updated_at = Carbon::now('UTC');

        // $success = $supplier->save();

        if (1) return response()->json([
            'id' => $supplier->id,
            'name' => $supplier->name,
            'facebook_link' => $supplier->facebook_link,
            'facebook_title' => $supplier->facebook_title,
            'instagram_link' => $supplier->instagram_link,
            'instagram_title' => $supplier->instagram_title,
            'background_image' => $supplier->background_image,
            'avatar' => $supplier->avatar,
            'active' => $supplier->active
        ], 200);

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
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
