<?php

namespace App\Http\Resources\Frontend\Set;

use Illuminate\Http\Resources\Json\Resource;
use App\Http\Resources\Frontend\Set\SetRelItem as SetRelItemResource;
use JWTAuth;

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
        $token = JWTAuth::getToken();

        if ($token) {
            $user = JWTAuth::parseToken()->authenticate();

            return [
                'id' => $this->id,
                'img' => asset('public/' . $this->img),
                'sum_like' => $this->sum_like,
                'liked' => !!$this->users->where('id', $user->id)->values()->first(),
                'item' => $this->items->first()
            ];
        }

        return [
            'id' => $this->id,
            'img' => asset('public/' . $this->img),
            'sum_like' => $this->sum_like,
            'item' => $this->items->first()
        ];
    }
}
