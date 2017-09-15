<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class FeatureValue extends Resource
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
            'vi_name' => $this->vi_name,
            'dev_name' => $this->dev_name,
            'feature_id' => $this->feature_id,
            'order' => $this->order,            
            'active' => $this->active
        ];
    }
}
