<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\Frontend\Set\Set as SetResource;
use App\Models\Frontend\Set\Set;
use App\SetRelLiker;
use App\DAL\SetDAL;
use App\DAL\SetRelLikerDAL;

use Carbon\Carbon;
use JWTAuth;

class SetController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (JWTAuth::getToken()) {
            $userId = JWTAuth::parseToken()->authenticate()->id;

            return SetDAL::getSetsWithLiker($request->type, $userId);
        }

        return SetDAL::getSets($request->type);
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

    public function like($setId)
    {
        $userId = JWTAuth::parseToken()->authenticate()->id;

        $setRelLiker = SetRelLikerDAL::getSetRelLiker($userId, $setId);

        if ($setRelLiker === null) {
            SetRelLikerDAL::store($userId, $setId);

            SetDAL::like($setId);
        } else {
            SetRelLikerDAL::delete($userId, $setId);

            SetDAL::dislike($setId);
        }

        return response([]);
    }

    public function search(Request $request)
    {
        $results = SetDAL::search($request->all());
        return response(['data' => $results]);
    }

    public function getSetByItem($itemId)
    {
        
    }
}
