<?php

namespace App\Http\Resources\Frontend\Collection;

use Illuminate\Http\Resources\Json\Resource;

class Related extends Resource
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
            'collections' => $this->collections
        ];
    }
}
