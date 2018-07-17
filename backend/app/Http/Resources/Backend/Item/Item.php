<?php

namespace App\Http\Resources\Backend\Item;

use Illuminate\Http\Resources\Json\Resource;
use App\Http\Resources\FeatureValue as FeatureValueResource;
use App\Http\Resources\Category as CategoryResource;
use App\Http\Resources\Supplier as SupplierResource;
use App\Http\Resources\Backend\ItemFeature as ItemFeatureResource;

class Item extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'price' => $this->price,
            'discount' => $this->discount,
            'sum_like' => $this->sum_like,
            'sum_buy' => $this->sum_buy,
            'sum_mark' => $this->sum_mark,
            'img' => $this->img,
            'active' => $this->active,
            'category' => new CategoryResource($this->category),
            'supplier' => new SupplierResource($this->supplier),
            'gender' => $this->gender_id,
            'featureValues' => FeatureValueResource::collection($this->featureValues)
        ];
    }
}
