<?php

namespace App\Http\Resources\Frontend\Set;

use Illuminate\Http\Resources\Json\Resource;
use App\Http\Resources\Frontend\Set\SetRelItem as SetRelItemResource;

class Set extends Resource
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
            'img' => asset('public/' . $this->img),
            'setRelItems' => $this->setRelItems->sortByDesc('sum_like')->values()
        ];
    }
}
