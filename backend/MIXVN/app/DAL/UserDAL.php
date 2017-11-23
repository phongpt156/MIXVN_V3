<?php

namespace App\DAL;

use Illuminate\Support\Facades\DB;
use App\Constants\SetType;

class UserDAL
{
    public static function getSetsUserLike($userId)
    {
        $sets = DB::table('set as s')
        ->select('s.id', 's.img', 's.sum_like', 'i.id as item_id', 'i.price as item_price', 'i.discount as item_discount', 'i.name as item_name', 'sup.id as supplier_id', 'sup.name as supplier_name', 'u.id as user_id', DB::raw('group_concat(f.name, ": ", fv.vi_name) as features'))
        ->join('item as i', 's.main_item_id', '=', 'i.id')
        ->join('supplier as sup', 'i.supplier_id', '=', 'sup.id')
        ->leftJoin('feature_value_rel_item as fvri', 'fvri.item_id', '=', 'i.id')
        ->leftJoin('feature_value as fv', 'fvri.feature_value_id', '=', 'fv.id')
        ->leftJoin('feature as f', 'fv.feature_id', '=', 'f.id')
        ->join('set_rel_liker as srl', function ($join) use ($userId) {
            $join->on('srl.set_id', '=', 's.id')
                 ->where('srl.user_id', '=', $userId);
        })
        ->join('user as u', 'u.id', '=', 'srl.user_id')
        ->orderBy('srl.created_at', 'desc')
        ->groupBy('s.id')
        ->paginate(16);

        return $sets;
    }
}
