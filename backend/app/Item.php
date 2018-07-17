<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    protected $table = 'item';

    public function category()
    {
        return $this->belongsTo('App\Category');
    }

    public function supplier()
    {
        return $this->belongsTo('App\Supplier');
    }

    public function featureValues()
    {
        return $this->belongsToMany('App\FeatureValue', 'feature_value_rel_item');
    }
}
