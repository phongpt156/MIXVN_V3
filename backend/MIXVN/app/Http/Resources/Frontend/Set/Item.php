<?php

namespace App\Http\Resources\Frontend\Set;

use Illuminate\Http\Resources\Json\Resource;

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
            'img' => asset('public/' . $this->img),
            'supplier' => $this->supplier
        ];
    }
}
