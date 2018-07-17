<?php

namespace App\Models\Frontend\Set;

use Illuminate\Database\Eloquent\Model;
use App\User as UserModel;

class User extends UserModel
{
    public function toArray()
    {
        return [
            'id' => $this->id,
            'name' => $this->name
        ];
    }
}
