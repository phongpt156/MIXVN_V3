<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use App\Http\Controllers\Controller;
use App\Http\Resources\Collection as CollectionResource;
use App\Http\Requests\Collection as CollectionRequest;
use App\Collection;
use Carbon\Carbon;
use Storage;
use Intervention\Image\ImageManagerStatic as Image;

class CollectionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return CollectionResource::collection(Collection::paginate());
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
    public function store(CollectionRequest $request)
    {
        $now = Carbon::now('UTC');
        $collection = new Collection;

        $collection->name = $request->name;
        if ($request->img) {
            $collection->img = 'images/' . $now->format('Y-m-dTH-i-s-') . $request->img->getClientOriginalName();
            Image::make($request->img)->resize(300, null, function ($constraint) {
                $constraint->aspectRatio();
            })->save($collection->img);
        }
        $collection->active = ($collection->active === 'true' || $collection->active == 1) ? true : false;        
        $collection->created_at = $now;
        $collection->updated_at = $now;

        $success = $collection->save();

        if ($success) {
            return response()->json([
                'id' => $collection->id,
                'name' => $collection->name,
                'img' => $collection->img ? asset($collection->img) : '',
                'active' => $collection->active
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
    public function update(CollectionRequest $request, $id)
    {
        $now = Carbon::now('UTC');
        
        $collection = Collection::find($id);

        if ($request->img) {
            if (File::exists($collection->img)) {
                File::delete($collection->img);
            }
            $collection->img = 'images/' . $now->format('Y-m-dTH-i-s-') . $request->img->getClientOriginalName();
            Image::make($request->img)->resize(300, null, function ($constraint) {
                $constraint->aspectRatio();
            })->save($collection->img);
        }
        $collection->name = $request->name;
        $collection->active = ($request->active === 'true' || $request->active == 1) ? true : false;
        $collection->updated_at = $now;

        $success = $collection->save();

        if ($success) {
            return response()->json([
                'id' => $collection->id,
                'img' => $collection->img ? asset($collection->img) : '',
                'name' => $collection->name,
                'active' => $collection->active
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
        $collection = Collection::find($id);

        if (File::exists($collection->img)) {
            File::delete($collection->img);
        }

        $success = $collection->delete();

        if ($success) {
            return response()->json([
                'messages' => 'Success'
            ], 200);
        }

        return response()->json([], 401);
    }
}
