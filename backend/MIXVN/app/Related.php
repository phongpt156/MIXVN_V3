<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Related extends Model
{
    protected $table = 'related';

    public function collections()
    {
        return $this->belongsToMany('App\Collection', 'related_collection');
    }

    public function toArray()
    {
        return [
            'id' => $this->id,
            'collections' => $this->collections
        ];
    }
}
