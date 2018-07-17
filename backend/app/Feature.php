<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Feature extends Model
{
    protected $table = 'feature';

    public function featureValues()
    {
        return $this->hasMany('App\FeatureValue');
    }
}
