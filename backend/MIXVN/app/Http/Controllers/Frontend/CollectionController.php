<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\Frontend\Collection\Collection as CollectionResource;
use App\Http\Resources\Frontend\Collection\CollectionPage as CollectionPageResource;
use App\Collection;

class CollectionController extends Controller
{
    public function getCollections($paginates = 12)
    {
        return CollectionResource::collection(Collection::paginate($paginates));
    }

    public function getCollectionPage($id)
    {
        if (Collection::find($id)) {
            return new CollectionPageResource(Collection::find($id));
        }
        return response()->json([]);
    }
}
