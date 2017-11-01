<?php

namespace App\Models\Frontend\Set;

use Illuminate\Database\Eloquent\Model;
use App\Set as SetModel;

class Set extends SetModel
{
    public function items()
    {
        return $this->belongsToMany('App\Models\Frontend\Set\Item', 'set_rel_item');
    }

    public function setRelItems()
    {
        return $this->hasMany('App\Models\Frontend\Set\SetRelItem');
    }
}
