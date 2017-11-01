<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Http\Resources\Frontend\Collection\Collection as CollectionResource;
use App\Http\Requests\Collection as CollectionRequest;
use App\Collection;
use App\SetCollection;
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
        return CollectionResource::collection(Collection::paginate(100));
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
        DB::transaction(function () use ($request) {
            $now = Carbon::now('UTC');
            $collection = new Collection;
            $collection->name = $request->name;

            if ($request->img) {
                $convertBlobFile = Storage::disk('upload_image')->put('images', $request->img);
                $convertBlobFileName = pathinfo($convertBlobFile, PATHINFO_FILENAME) . '.' . pathinfo($convertBlobFile, PATHINFO_EXTENSION);
                $collection->img = 'images/' . $convertBlobFileName;
                $collection->sm_img = 'images/sm_' . $convertBlobFileName;
    
                Image::make(public_path() . '/' . $convertBlobFile)->resize(325, null, function ($constraint) {
                    $constraint->aspectRatio();
                })->save(public_path() . '/' . $collection->sm_img);
                Image::make(public_path() . '/' . $convertBlobFile)->resize(1366, null, function ($constraint) {
                    $constraint->aspectRatio();
                })->save(public_path() . '/' . $collection->img);
            }
            $collection->active = ($request->active === 'true' || $request->active == 1) ? true : false;        
            $collection->created_at = $now;
            $collection->updated_at = $now;
            $collection->save();

            // $productIds = $request->productIds;
            // if (count($productIds)) {
            //     foreach ($productIds as $productId) {
            //         $productCollection = new ProductCollection;
            //         $productCollection->collection_id = $collection->id;
            //         $productCollection->product_id = $productId;
            //         $productCollection->created_at = $now;
            //         $productCollection->updated_at = $now;
            //         $productCollection->active = true;
            //         $productCollection->save();
            //     }
            // }
        }, 1);
        return response()->json([]);
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
        $collection->name = $request->name;
        if ($request->img) {
            if (File::exists(public_path($collection->img))) {
                File::delete(public_path($collection->img));
            }
            if (File::exists(public_path($collection->sm_img))) {
                File::delete(public_path($collection->sm_img));
            }
            
            $convertBlobFile = Storage::disk('upload_image')->put('images', $request->img);
            $convertBlobFileName = pathinfo($convertBlobFile, PATHINFO_FILENAME) . '.' . pathinfo($convertBlobFile, PATHINFO_EXTENSION);
            $collection->img = 'images/' . $convertBlobFileName;
            $collection->sm_img = 'images/sm_' . $convertBlobFileName;

            Image::make(public_path() . '/' . $convertBlobFile)->resize(325, null, function ($constraint) {
                $constraint->aspectRatio();
            })->save(public_path() . '/' . $collection->sm_img);
            Image::make(public_path() . '/' . $convertBlobFile)->resize(1366, null, function ($constraint) {
                $constraint->aspectRatio();
            })->save(public_path() . '/' . $collection->img);
        }

        $collection->active = ($request->active === 'true' || $request->active == 1) ? true : false;
        $collection->updated_at = $now;

        $success = $collection->save();

        if ($success) {
            return response()->json([
                'id' => $collection->id,
                'img' => $collection->img ? asset('public/' . $collection->img) : '',
                'sm_img' => $collection->img ? asset('public/' . $collection->img) : '',
                'name' => $collection->name,
                'active' => $collection->active
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
        DB::transaction(function () use ($id) {
            $collection = Collection::find($id);
            
            if (File::exists(public_path($collection->img))) {
                File::delete(public_path($collection->img));
            }
            if (File::exists(public_path($collection->sm_img))) {
                File::delete(public_path($collection->sm_img));
            }
            
            $set_collections = SetCollection::where('collection_id', $id)->delete();

            $success = $collection->delete();
        });
        return response()->json([]);
    }
}
