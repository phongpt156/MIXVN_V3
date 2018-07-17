<?php

namespace App\Http\Resources\Frontend\Collection;

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
            'img' => $this->img ? $this->img : '',
            'sm_img' => $this->sm_img ? $this->sm_img : '',
            'active' => $this->active
        ];
    }
}
