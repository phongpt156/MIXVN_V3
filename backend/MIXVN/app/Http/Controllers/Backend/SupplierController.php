<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use App\Http\Controllers\Controller;
use App\Http\Resources\Supplier as SupplierResource;
use App\Http\Requests\Supplier as SupplierRequest;
use App\Supplier;
use Carbon\Carbon;
use Storage;
use Intervention\Image\ImageManagerStatic as Image;

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
        $now = Carbon::now('UTC');

        $supplier->name = $request->name;
        $supplier->address = $request->address;
        $supplier->facebook_link = $request->facebook_link;
        $supplier->facebook_title = $request->facebook_title;
        $supplier->instagram_link = $request->instagram_link;
        $supplier->instagram_title = $request->instagram_title;
        $supplier->phone_number = $request->phone_number;
        $supplier->open_time = $request->open_time;
        $supplier->close_time = $request->close_time;

        if ($request->background_image) {
            $convertBlobFile = Storage::disk('upload_image')->put('images', $request->background_image);
            $converBlobFileName = pathinfo($convertBlobFile, PATHINFO_FILENAME) . '.' . pathinfo($convertBlobFile, PATHINFO_EXTENSION);

            $supplier->background_image = 'images/' . $converBlobFileName;
            Image::make(public_path() . '/' . $convertBlobFile)->resize(1366, null, function ($constraint) {
                $constraint->aspectRatio();
            })->save(public_path() . '/' . $supplier->background_image);
        }
        if ($request->avatar) {
            $convertBlobFile = Storage::disk('upload_image')->put('images', $request->avatar);
            $converBlobFileName = pathinfo($convertBlobFile, PATHINFO_FILENAME) . '.' . pathinfo($convertBlobFile, PATHINFO_EXTENSION);

            $supplier->avatar = 'images/' . $converBlobFileName;
            Image::make(public_path() . '/' . $request->avatar)->resize(325, null, function ($constraint) {
                $constraint->aspectRatio();
            })->save(public_path() . '/' . $supplier->avatar);
        }
        $supplier->active = $request->active === 'true' ? true : false;
        $supplier->created_at = $now;
        $supplier->updated_at = $now;
        
        $success = $supplier->save();

        if ($success) return response()->json([
            'id' => $supplier->id,
            'name' => $supplier->name,
            'address' => $supplier->address,
            'facebook_link' => $supplier->facebook_link,
            'facebook_title' => $supplier->facebook_title,
            'instagram_link' => $supplier->instagram_link,
            'instagram_title' => $supplier->instagram_title,
            'background_image' => $supplier->background_image ? asset($supplier->background_image) : '',
            'avatar' => $supplier->avatar ? asset($supplier->avatar) : '',
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
        $now = Carbon::now('UTC');
        $supplier = Supplier::find($id);

        $supplier->name = $request->name;
        $supplier->address = $request->address;
        $supplier->facebook_link = $request->facebook_link;
        $supplier->facebook_title = $request->facebook_title;
        $supplier->instagram_link = $request->instagram_link;
        $supplier->instagram_title = $request->instagram_title;
        $supplier->phone_number = $request->phone_number;
        $supplier->open_time = $request->open_time;
        $supplier->close_time = $request->close_time;

        if ($request->background_image) {
            if (File::exists($supplier->background_image)) {
                File::delete($supplier->background_image);
            }
            
            $convertBlobFile = Storage::disk('upload_image')->put('images', $request->background_image);
            $converBlobFileName = pathinfo($convertBlobFile, PATHINFO_FILENAME) . '.' . pathinfo($convertBlobFile, PATHINFO_EXTENSION);

            $supplier->background_image = 'images/' . $converBlobFileName;
            Image::make(public_path() . '/' . $convertBlobFile)->resize(1366, null, function ($constraint) {
                $constraint->aspectRatio();
            })->save(public_path() . '/' . $supplier->background_image);
        }

        if ($request->avatar) {
            if (File::exists($supplier->avatar)) {
                File::delete($supplier->avatar);
            }

            $convertBlobFile = Storage::disk('upload_image')->put('images', $request->avatar);
            $converBlobFileName = pathinfo($convertBlobFile, PATHINFO_FILENAME) . '.' . pathinfo($convertBlobFile, PATHINFO_EXTENSION);

            $supplier->avatar = 'images/' . $converBlobFileName;
            Image::make(public_path() . '/' . $request->avatar)->resize(325, null, function ($constraint) {
                $constraint->aspectRatio();
            })->save(public_path() . '/' . $supplier->avatar);
        }

        $supplier->active = $request->active === 'true' ? true : false;
        $supplier->updated_at = $now;
        
        $success = $supplier->save();
        
        if ($success) return response()->json([
            'active' => $request->active,
            'id' => $supplier->id,
            'name' => $supplier->name,
            'address' => $supplier->address,
            'facebook_link' => $supplier->facebook_link,
            'facebook_title' => $supplier->facebook_title,
            'instagram_link' => $supplier->instagram_link,
            'instagram_title' => $supplier->instagram_title,
            'background_image' => $supplier->background_image ? asset($supplier->background_image) : '',
            'avatar' => $supplier->avatar ? asset($supplier->avatar) : '',
            'active' => $supplier->active
        ], 200);

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
        $supplier = Supplier::find($id);
        
        if (File::exists($supplier->background_image)) {
            File::delete($supplier->background_image);
        }
        if (File::exists($supplier->avatar)) {
            File::delete($supplier->avatar);
        }

        $success = $supplier->delete();

        if ($success) {
            return response()->json([
                'messages' => 'Success'
            ], 200);
        }

        return response()->json([], 401);
    }
}
