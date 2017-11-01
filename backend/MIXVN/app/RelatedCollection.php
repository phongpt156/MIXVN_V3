<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RelatedCollection extends Model
{
    protected $table = 'related_collection';

    public function collection()
    {
        return $this->belongsTo('App\Collection');
    }

    public function related()
    {
        return $this->belongsTo('App\Related');
    }
}
