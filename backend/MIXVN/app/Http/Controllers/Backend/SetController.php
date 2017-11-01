<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Set;
use App\Item;
use App\SetRelItem;
use App\FeatureValueRelItem;
use Carbon\Carbon;
use Storage;
use Intervention\Image\ImageManagerStatic as Image;

class SetController extends Controller
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
        DB::transaction(function () use ($request) {
            $now = Carbon::now('UTC');
            $set = new Set;
            $set->active = ($request->active === 'true' || $request->active == 1) ? true : false;
            if ($request->img) {
                $convertBlobFile = Storage::disk('upload_image')->put('images', $request->img);
                $convertBlobFileName = pathinfo($convertBlobFile, PATHINFO_FILENAME) . '.' . pathinfo($convertBlobFile, PATHINFO_EXTENSION);

                $set->img = 'images/' . $convertBlobFileName;
                Image::make(public_path() . '/' . $convertBlobFile)->resize(525, null, function ($constraint) {
                    $constraint->aspectRatio();
                })->save(public_path() . '/' . $set->img);
            }
            $set->created_at = $now;
            $set->updated_at = $now;

            $set->save();

            $items = $request->items;
            if ($items) {
                foreach ($request->items as $item) {
                    $newItem = new Item;
                    $newItem->name = $item['name'];
                    $newItem->price = $item['price'];
                    $newItem->discount = $item['discount'];
                    $newItem->category_id = $item['category'];
                    $newItem->gender_id = $item['gender'];
                    if ($item['img']) {
                        $convertBlobFile = Storage::disk('upload_image')->put('images', $item['img']);
                        $convertBlobFileName = pathinfo($convertBlobFile, PATHINFO_FILENAME) . '.' . pathinfo($convertBlobFile, PATHINFO_EXTENSION);
                        
                        $newItem->img = 'images/' . $convertBlobFileName;
                        Image::make(public_path() . '/' . $convertBlobFile)->resize(300, null, function ($constraint) {
                            $constraint->aspectRatio();
                        })->save(public_path() . '/' . $newItem->img);
                    }
                    $newItem->active = ($item['active'] === 'true' || $item['active'] == 1) ? true : false;
                    $newItem->supplier_id = $item['supplier'];
                    $newItem->created_at = $now;                
                    $newItem->updated_at = $now;
                    $success = $newItem->save();
                    
                    if ($item['features']) {
                        $features = explode(',', $item['features']);
                        foreach ($features as $feature) {
                            $featureValueRelItem = new FeatureValueRelItem;
                            $featureValueRelItem->feature_value_id = $feature;
                            $featureValueRelItem->item_id = $newItem->id;
                            $featureValueRelItem->created_at = $now;
                            $featureValueRelItem->updated_at = $now;
                            $featureValueRelItem->save();
                        }
                    }

                    $setRefItem = new ItemGroupRelItem;
                    $setRefItem->set_id = $set->id;
                    $setRefItem->item_id = $newItem->id;
                    $setRefItem->created_at = $now;
                    $setRefItem->updated_at = $now;
                    $setRefItem->save();
                }
            }

            $itemIds = $request->itemIds;
            if (count($itemIds)) {
                foreach ($itemIds as $itemId) {
                    $setRefItem = new ItemGroupRelItem;
                    $setRefItem->set_id = $set->id;
                    $setRefItem->item_id = $itemId;
                    $setRefItem->created_at = $now;
                    $setRefItem->updated_at = $now;
                    $setRefItem->save();
                }
            }
            
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
