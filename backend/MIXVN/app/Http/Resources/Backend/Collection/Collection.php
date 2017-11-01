<?php

namespace App\Http\Resources\Backend\Collection;

use Illuminate\Http\Resources\Json\Resource;

class Collection extends Resource
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
            'img' => $this->img ? asset('public/' . $this->img) : '',
            'sm_img' => $this->sm_img ? asset('public/' . $this->sm_img) : '',
            'active' => $this->active
        ];
    }
}
