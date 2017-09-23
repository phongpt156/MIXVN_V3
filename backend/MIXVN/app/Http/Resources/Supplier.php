<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;
use Storage;

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
            'phone_number' => $this->phone_number,
            'open_time' => $this->open_time,
            'close_time' => $this->close_time,
            'like' => $this->like,
            'follow' => $this->follow,
            'facebook_link' => $this->facebook_link,
            'facebook_title' => $this->facebook_title,
            'instagram_link' => $this->instagram_link,
            'instagram_title' => $this->instagram_title,
            'background_image' => $this->background_image ? asset($this->background_image) : '',
            'avatar' => $this->avatar ? asset($this->avatar) : '',
            'active' => $this->active
        ];
    }
}
