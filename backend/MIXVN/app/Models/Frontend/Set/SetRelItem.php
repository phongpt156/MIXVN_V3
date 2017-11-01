<?php

namespace App\Models\Frontend\Set;

use Illuminate\Database\Eloquent\Model;
use App\SetRelItem as SetRelItemModel;

class SetRelItem extends SetRelItemModel
{
    public function item()
    {
        return $this->belongsTo('App\Models\Frontend\Set\Item');
    }

    public function toArray()
    {
        return [
            'sum_like' => $this->sum_like,
            'item' => $this->item
        ];
    }
}
