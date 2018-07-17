<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\DAL\SupplierDAL;
use JWTAuth;

class SupplierController extends Controller
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
    public function store(Request $request)
    {
        //
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

    public function getSupplier($id)
    {
        return response(['data' => SupplierDAL::getSupplier($id)]);
    }

    public function getSetsBySupplier($supplierId, $type = 1)
    {
        if (JWTAuth::getToken()) {
            $userId = JWTAuth::parseToken()->authenticate()->id;

            return SupplierDAL::getSetBySupplierWithLiker($supplierId, $type, $userId);
        }
        
        return SupplierDAL::getSetBySupplier($supplierId, $type);
    }

    public function searchSet($supplierId, $itemName, $type = 1)
    {
        if (JWTAuth::getToken()) {
            $userId = JWTAuth::parseToken()->authenticate()->id;

            return SupplierDAL::searchSetWithLiker($supplierId, $type, $userId, $itemName);
        }
        
        return SupplierDAL::searchSet($supplierId, $type, $itemName);
    }
}
