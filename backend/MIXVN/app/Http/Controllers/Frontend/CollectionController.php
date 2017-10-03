<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\Collection as CollectionResource;
use App\Collection;

class CollectionController extends Controller
{
    public function getCollections($paginates = 12)
    {
        return CollectionResource::collection(Collection::paginate($paginates));
    }
}
