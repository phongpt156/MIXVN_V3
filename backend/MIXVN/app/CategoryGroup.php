<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Http\Resources\Category;

class CategoryGroup extends Model
{
    protected $table = 'category_group';

    public function parentCategory()
    {
        return $this->belongsTo('App\ParentCategory');
    }

    public function categories()
    {
        return $this->hasMany('App\Category', 'group_id');
    }

    public function toArray()
    {
        return [
            'id' => $this->id,
            'gender_id' => 1,
            'order' => $this->order,
            'categories' => Category::collection($this->categories)
        ];
    }
}
