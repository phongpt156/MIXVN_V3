<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use App\Http\Controllers\Controller;
use App\Http\Requests\Item as ItemRequest;
use App\Http\Resources\Backend\Item\Item as ItemResource;
use App\Item;
use App\FeatureValueRelItem;
use App\SetRelItem;
use Carbon\Carbon;
use Intervention\Image\ImageManagerStatic as Image;
use Storage;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ItemResource::collection(Item::where('active', '<', 2)->paginate(10));
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
        DB::transaction(function() use ($request) {
            
            $now = Carbon::now('UTC');
            $item = new Item;
        
            $item->name = $request->name;
            $item->price = $request->price;
            $item->discount = $request->discount;
            $item->category_id = $request->category;
            $item->supplier_id = $request->supplier;
            $item->gender_id = $request->gender;
            $item->active = ($request->active === 'true' || $request->active == 1) ? true : false;
            if ($request->img) {
                $convertBlobFile = Storage::disk('upload_image')->put('images', $request->img);
                $convertBlobFileName = pathinfo($convertBlobFile, PATHINFO_FILENAME) . '.' . pathinfo($convertBlobFile, PATHINFO_EXTENSION);

                $item->img = 'images/' . $convertBlobFileName;
                Image::make(public_path() . '/' . $convertBlobFile)->resize(325, null, function ($constraint) {
                    $constraint->aspectRatio();
                })->save(public_path() . '/' . $item->img);
            }
            $item->created_at = $now;
            $item->updated_at = $now;
            $item->save();

            if ($request->features && $request->features !== 'null') {
                $features = explode(',', $request->features);
                $itemTag = '';
                
                foreach ($features as $feature) {
                    $itemTag .= $feature . ',';

                    $featureValueRelItem = new FeatureValueRelItem;
                    $featureValueRelItem->feature_value_id = $feature;
                    $featureValueRelItem->item_id = $item->id;
                    $featureValueRelItem->created_at = $now;
                    $featureValueRelItem->updated_at = $now;

                    $featureValueRelItem->save();
                }
                $item->tag = $itemTag;
            }

            $item->save();
        });
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
    public function update(ItemRequest $request, $id)
    {
        DB::transaction(function() use ($request, $id) {

            $now = Carbon::now('UTC');
            $item = Item::find($id);
        
            $item->name = $request->name;
            $item->price = $request->price;
            $item->discount = $request->discount !== 'null' ? $request->discount : null;
            $item->category_id = $request->category;
            $item->supplier_id = $request->supplier;
            $item->gender_id = $request->gender;
            $item->active = ($request->active === 'true' || $request->active == 1) ? true : false;

            if ($request->img) {
                if (File::exists(public_path($item->img))) {
                    File::delete(public_path($item->img));
                }
                $convertBlobFile = Storage::disk('upload_image')->put('images', $request->img);
                $convertBlobFileName = pathinfo(public_path() . '/' . $convertBlobFile, PATHINFO_FILENAME) . '.' . pathinfo($convertBlobFile, PATHINFO_EXTENSION);

                $item->img = 'images/' . $convertBlobFileName;
                Image::make(public_path() . '/' . $convertBlobFile)->resize(325, null, function ($constraint) {
                    $constraint->aspectRatio();
                })->save($item->img);
            }

            $item->updated_at = $now;
            $tag = '';

            $featureValueRelItems = FeatureValueRelItem::where('item_id', $item->id);
            
            if ($request->features && $request->features !== 'null') {
                $features = explode(',', $request->features);
                foreach ($features as $feature) {
                    $tag .= $feature . ',';
                }

                $featureValueRelItems = $featureValueRelItems->pluck('feature_value_id');

                foreach ($featureValueRelItems as $featureValueRelItem) {
                    $key = array_search($featureValueRelItem, $features);
                    if ($key === false) {
                        FeatureValueRelItem::where('feature_value_id', $featureValueRelItem)->where('item_id', $item->id)->delete();
                    } else {
                        unset($features[$key]);
                    }
                }
                foreach ($features as $feature) {
                    $featureValueRelItem = new FeatureValueRelItem;
                    $featureValueRelItem->feature_value_id = $feature;
                    $featureValueRelItem->item_id = $item->id;
                    $featureValueRelItem->created_at = $now;
                    $featureValueRelItem->updated_at = $now;

                    $featureValueRelItem->save();
                }
            } else {
                $featureValueRelItems->delete();
            }

            $item->tag = $tag;
            $item->save();
        });
        return response()->json([]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        DB::transaction(function() use ($id) {
            $item = Item::find($id);
            FeatureValueRelItem::where('item_id', $item->id)->delete();
            SetRelItem::where('item_id', $item->id)->delete();
            if (File::exists(public_path($item->img))) {
                File::delete(public_path($item->img));
            }
            $item->delete();
        });

        return response()->json([]);
    }

    public function search($name = null)
    {
        $item = Item::where('name', 'like', '%' . $name . '%')->orderBy('created_at', 'desc')->paginate(10);
        
        return \App\Http\Resources\Backend\Item\ItemSearch::collection($item);
    }
}
