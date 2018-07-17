<?php

namespace App\Models\Frontend\Set;

use Illuminate\Database\Eloquent\Model;
use App\Item as ItemModel;

class Item extends ItemModel
{
    public function toArray()
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'discount' => $this->discount,
            'sum_like' => $this->sum_like,
            'supplier' => $this->supplier,
            'price' => $this->price
        ];
    }
}
