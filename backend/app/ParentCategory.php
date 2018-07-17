<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ParentCategory extends Model
{
    protected $table = 'parent_category';

    public function categories()
    {
        return $this->hasMany('App\Category');
    }
}
