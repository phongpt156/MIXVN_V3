<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = 'category';

    public function parentCategory()
    {
        return $this->belongsToMany('App\ParentCategory');
    }
}
