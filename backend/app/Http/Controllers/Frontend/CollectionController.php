<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\Frontend\Collection\Collection as CollectionResource;
use App\Collection;
use App\Dal\CollectionSetDAL;
use JWTAuth;

class CollectionController extends Controller
{
    public function getCollections($paginates = 12)
    {
        return CollectionResource::collection(Collection::paginate($paginates));
    }

    public function getCollectionPage($id)
    {
        if (JWTAuth::getToken()) {
            $userId = JWTAuth::parseToken()->authenticate()->id;

            return CollectionSetDal::getSetsByCollectionWithLiker($id, $userId);
        }

        return CollectionSetDAL::getSetsByCollection($id);
    }
}
