<?php

namespace App\Http\Resources\Frontend\Collection;

use Illuminate\Http\Resources\Json\Resource;

class CollectionPage extends Resource
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
            'img' => $this->img ? asset('public/' . $this->img) : '',
            'sm_img' => $this->sm_img ? asset('public/' . $this->sm_img) : '',
            'set' => $this->sets,
            'relates' => $this->relates
        ];
    }
}
