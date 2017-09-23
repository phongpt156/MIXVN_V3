<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use App\Http\Controllers\Controller;
use App\Http\Requests\Product as ProductRequest;
use App\Http\Resources\Backend\Product\Product as ProductResource;
use App\Product;
use App\FeatureValueRelProduct;
use App\ProductGroupRelProduct;
use Carbon\Carbon;
use Intervention\Image\ImageManagerStatic as Image;
use Storage;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ProductResource::collection(Product::where('active', '<', 2)->paginate(10));
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
            $product = new Product;
        
            $product->name = $request->name;
            $product->price = $request->price;
            $product->discount = $request->discount;
            $product->category_id = $request->category;
            $product->supplier_id = $request->supplier;
            $product->gender_id = $request->gender;
            $product->active = ($request->active === 'true' || $request->active == 1) ? true : false;
            if ($request->img) {
                $convertBlobFile = Storage::disk('upload_image')->put('images', $request->img);
                $converBlobFileName = pathinfo($convertBlobFile, PATHINFO_FILENAME) . '.' . pathinfo($convertBlobFile, PATHINFO_EXTENSION);

                $product->img = 'images/' . $converBlobFileName;
                Image::make($convertBlobFile)->resize(325, null, function ($constraint) {
                    $constraint->aspectRatio();
                })->save($product->img);
            }
            $product->created_at = $now;
            $product->updated_at = $now;
            $product->save();

            if ($request->features && $request->features !== 'null') {
                $features = explode(',', $request->features);
                foreach ($features as $feature) {
                    $featureValueRelProduct = new FeatureValueRelProduct;
                    $featureValueRelProduct->feature_value_id = $feature;
                    $featureValueRelProduct->product_id = $product->id;
                    $featureValueRelProduct->created_at = $now;
                    $featureValueRelProduct->updated_at = $now;

                    $featureValueRelProduct->save();
                }
            }
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
    public function update(ProductRequest $request, $id)
    {
        DB::transaction(function() use ($request, $id) {

            $now = Carbon::now('UTC');
            $product = Product::find($id);
        
            $product->name = $request->name;
            $product->price = $request->price;
            $product->discount = $request->discount;
            $product->category_id = $request->category;
            $product->supplier_id = $request->supplier;
            $product->gender_id = $request->gender;
            $product->active = ($request->active === 'true' || $request->active == 1) ? true : false;

            if ($request->img) {
                if (File::exists($product->img)) {
                    File::delete($product->img);
                }
                $convertBlobFile = Storage::disk('upload_image')->put('images', $request->img);
                $converBlobFileName = pathinfo($convertBlobFile, PATHINFO_FILENAME) . '.' . pathinfo($convertBlobFile, PATHINFO_EXTENSION);

                $product->img = 'images/' . $converBlobFileName;
                Image::make($convertBlobFile)->resize(325, null, function ($constraint) {
                    $constraint->aspectRatio();
                })->save($product->img);
            }

            $product->updated_at = $now;
            $product->save();

            $featureValueRelProducts = FeatureValueRelProduct::where('product_id', $product->id);
            
            if ($request->features && $request->features !== 'null') {
                $features = explode(',', $request->features);
                $featureValueRelProducts = $featureValueRelProducts->pluck('feature_value_id');

                foreach ($featureValueRelProducts as $featureValueRelProduct) {
                    $key = array_search($featureValueRelProduct, $features);
                    if ($key === false) {
                        FeatureValueRelProduct::where('feature_value_id', $featureValueRelProduct)->where('product_id', $product->id)->delete();
                    } else {
                        unset($features[$key]);
                    }
                }
                foreach ($features as $feature) {
                    $featureValueRelProduct = new FeatureValueRelProduct;
                    $featureValueRelProduct->feature_value_id = $feature;
                    $featureValueRelProduct->product_id = $product->id;
                    $featureValueRelProduct->created_at = $now;
                    $featureValueRelProduct->updated_at = $now;

                    $featureValueRelProduct->save();
                }
            } else {
                $featureValueRelProducts->delete();
            }
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
            $product = Product::find($id);
            FeatureValueRelProduct::where('product_id', $product->id)->delete();
            ProductGroupRelProduct::where('product_id', $product->id)->delete();
            if (File::exists($product->img)) {
                File::delete($product->img);
            }
            $product->delete();
        });

        return response()->json([]);
    }

    public function search($name = null)
    {
        $product = Product::where('name', 'like', '%' . $name . '%')->orderBy('created_at', 'desc')->paginate(10);
        
        return \App\Http\Resources\Backend\Product\ProductSearch::collection($product);
    }
}
