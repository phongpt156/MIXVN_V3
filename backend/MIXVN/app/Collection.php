<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Collection extends Model
{
    protected $table = 'collection';

    public function relatedCollections()
    {
        return $this->hasMany('App\RelatedCollection');
    }

    public function relates()
    {
        return $this->belongsToMany('App\Related', 'related_collection');
    }

    public function sets()
    {
        return $this->belongsToMany('App\Set', 'set_rel_collection');
    }
}
