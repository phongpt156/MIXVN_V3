<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ParentCategory extends Model
{
    protected $table = 'parent_category';

    public function categoryGroups()
    {
        return $this->hasMany('App\CategoryGroup');
    }
}
