<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FeatureValue extends Model
{
    protected $table = 'feature_value';

    public function feature()
    {
        return $this->belongsTo('App\Feature');
    }
}
