<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class ParentCategory extends Resource
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
            'order' => $this->order,
            'male_cate' => Category::collection($this->categories->where('gender_id', 1)->sortBy('order')->values()),
            'female_cate' => Category::collection($this->categories->where('gender_id', 2)->sortBy('order')->values())
        ];
    }
}
