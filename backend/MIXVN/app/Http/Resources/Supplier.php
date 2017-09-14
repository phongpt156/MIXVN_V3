<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class Supplier extends Resource
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
            'address' => $this->address,
            'facebook_link' => $this->facebook_link,
            'facebook_title' => $this->facebook_title,
            'instagram_link' => $this->instagram_link,
            'instagram_title' => $this->instagram_title,
            'background_image' => $this->background_image,
            'avatar' => $this->avatar,
            'active' => $this->active
        ];
    }
}
