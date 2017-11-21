<?php

namespace App\DAL;

use Illuminate\Support\Facades\DB;
use App\Constants\SetType;

class CollectionSetDAL
{
    public static function getSetsByCollection($collectionId)
    {
        $sets = DB::table('collection as c')
                    ->select('c.id as collection_id', 'c.name as collection_name', 'c.img as collection_img', 's.id', 's.img', 's.sum_like', 'i.id as item_id', 'i.price as item_price', 'i.discount as item_discount', 'i.name as item_name', 'sup.id as supplier_id', 'sup.name as supplier_name', DB::raw('group_concat(f.name, ": ", fv.vi_name) as features'))
                    ->join('set_rel_collection as src', 'src.collection_id', '=', 'c.id')
                    ->join('set as s', 'src.set_id', '=', 's.id')
                    ->join('set_rel_item as sri', 's.id', '=', 'sri.set_id')
                    ->join('item as i', function ($join) {
                        $join->on('sri.item_id', '=', 'i.id')
                            ->on('s.main_item_id', '=', 'i.id');
                    })
                    ->join('supplier as sup', 'i.supplier_id', '=', 'sup.id')
                    ->leftJoin('feature_value_rel_item as fvri', 'fvri.item_id', '=', 'i.id')
                    ->leftJoin('feature_value as fv', 'fvri.feature_value_id', '=', 'fv.id')
                    ->leftJoin('feature as f', 'fv.feature_id', '=', 'f.id')
                    ->where('c.id', $collectionId)
                    ->groupBy('s.id')
                    ->orderBy('s.created_at', 'desc')
                    ->paginate(16);

        return $sets;
    }

    public static function getSetsByCollectionWithLiker($collectionId, $userId)
    {
        $sets = DB::table('collection as c')
                    ->select('c.id as collection_id', 'c.name as collection_name', 'c.img as collection_img', 's.id', 's.img', 's.sum_like', 'i.id as item_id', 'i.price as item_price', 'i.discount as item_discount', 'i.name as item_name', 'sup.id as supplier_id', 'sup.name as supplier_name', 'u.id as user_id', 
                    DB::raw('group_concat(f.name, ": ", fv.vi_name) as features'))
                    ->join('set_rel_collection as src', 'src.collection_id', '=', 'c.id')
                    ->join('set as s', 'src.set_id', '=', 's.id')
                    ->join('set_rel_item as sri', 's.id', '=', 'sri.set_id')
                    ->join('item as i', function ($join) {
                        $join->on('sri.item_id', '=', 'i.id')
                            ->on('s.main_item_id', '=', 'i.id');
                    })
                    ->join('supplier as sup', 'i.supplier_id', '=', 'sup.id')
                    ->leftJoin('feature_value_rel_item as fvri', 'fvri.item_id', '=', 'i.id')
                    ->leftJoin('feature_value as fv', 'fvri.feature_value_id', '=', 'fv.id')
                    ->leftJoin('feature as f', 'fv.feature_id', '=', 'f.id')
                    ->leftJoin('set_rel_liker as srl', function ($join) use ($userId) {
                        $join->on('srl.set_id', '=', 's.id')
                             ->where('srl.user_id', '=', $userId);
                    })
                    ->leftJoin('user as u', 'u.id', '=', 'srl.user_id')
                    ->where('c.id', $collectionId)
                    ->groupBy('s.id')
                    ->orderBy('s.created_at', 'desc')
                    ->paginate(16);

        return $sets;
    }
}
