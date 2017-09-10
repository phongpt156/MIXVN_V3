<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class CategoryGroup extends Resource
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
            'gender_id' => $this->gender_id,
            'order' => $this->order,
            'categories' => Category::collection($this->categories)
        ];
    }
}
