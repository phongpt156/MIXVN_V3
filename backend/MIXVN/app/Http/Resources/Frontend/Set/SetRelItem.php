<?php

namespace App\Http\Resources\Frontend\Set;

use Illuminate\Http\Resources\Json\Resource;
use App\Http\Resources\Frontend\Set\Item as ItemResource;
use App\Models\Frontend\Set\Item;

class SetRelItem extends Resource
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
            'items' => $this->items
        ];
    }
}
