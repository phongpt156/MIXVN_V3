<?php

namespace App\DAL;

use Illuminate\Support\Facades\DB;
use App\Constants\SetType;

class SetDAL
{
    public static function getSet($setId)
    {
        $set = DB::table('set')
                 ->select('id', 'img', 'sum_like', 'discount')
                 ->where('id', $setId)
                 ->first();
        return $set;
    }

    public static function getSets($type = 1)
    {
        $column = 's.created_at';
        
        switch ($type) {
            case SetType::getNewest(): {
                $column = 's.created_at';
                break;
            }
            case SetType::getMostLike(): {
                $column = 's.sum_like';
                break;
            }
            case SetType::getDiscount(): {
                $column = 'i.discount';
                break;
            }
        }

        $sets = DB::table('set as s')
                ->select('s.id', 's.img', 's.sum_like', 'i.id as item_id', 'i.price as item_price', 'i.discount as item_discount', 'i.name as item_name', 'sup.id as supplier_id', 'sup.name as supplier_name')
                ->join('set_rel_item as sri', 's.id', '=', 'sri.set_id')
                ->join('item as i', 'sri.item_id', '=', 'i.id')
                ->join('supplier as sup', 'i.supplier_id', '=', 'sup.id')
                ->orderBy($column, 'desc')
                ->groupBy('s.id')
                ->paginate(16);

        return $sets;
    }
    
    public static function getSetsWithLiker($type = 1, $userId = null)
    {
        $column = 's.created_at';
        
        switch ($type) {
            case SetType::getNewest(): {
                $column = 's.created_at';
                break;
            }
            case SetType::getMostLike(): {
                $column = 's.sum_like';
                break;
            }
            case SetType::getDiscount(): {
                $column = 'i.discount';
                break;
            }
        }

        $sets = DB::table('set as s')
                ->select('s.id', 's.img', 's.sum_like', 'i.id as item_id', 'i.price as item_price', 'i.discount as item_discount', 'i.name as item_name', 'sup.id as supplier_id', 'sup.name as supplier_name', 'u.id as user_id')
                ->join('set_rel_item as sri', 's.id', '=', 'sri.set_id')
                ->join('item as i', 'sri.item_id', '=', 'i.id')
                ->join('supplier as sup', 'i.supplier_id', '=', 'sup.id')
                ->leftJoin('set_rel_liker as srl', function ($join) use ($userId) {
                    $join->on('srl.set_id', '=', 's.id')->where('srl.user_id', $userId);
                })
                ->leftJoin('user as u', 'u.id', '=', 'srl.user_id')
                ->orderBy($column, 'desc')
                ->groupBy('s.id')
                ->paginate(16);

        return $sets;
    }

    public static function like($setId)
    {
        $set = DB::table('set')
          ->where('id', $setId)
          ->increment('sum_like');

        return $set;
    }

    public static function dislike($setId)
    {
        $set = DB::table('set')
          ->where('id', $setId)
          ->decrement('sum_like');
        
        return $set;
    }

    public static function search($request)
    {
        $itemName = $request['items'];
        return $itemName;
    }
}
