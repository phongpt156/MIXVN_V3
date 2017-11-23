<?php

namespace App\DAL;

use Illuminate\Support\Facades\DB;
use App\Constants\SetType;

class SupplierDAL
{
    public static function getSupplier($id)
    {
        $supplier = DB::table('supplier')
                      ->select('id', 'name', 'address', 'phone_number', 'open_time', 'close_time', 'avatar', 'background_image')
                      ->where('id', $id)
                      ->first();
        return $supplier;
    }

    public static function getSetBySupplier($supplierId, $type = 1)
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
        ->select('s.id', 's.img', 's.sum_like', 'i.id as item_id', 'i.price as item_price', 'i.discount as item_discount', 'i.name as item_name', DB::raw('group_concat(f.name, ": ", fv.vi_name) as features'))
        ->join('item as i', 's.main_item_id', '=', 'i.id')
        ->leftJoin('feature_value_rel_item as fvri', 'fvri.item_id', '=', 'i.id')
        ->leftJoin('feature_value as fv', 'fvri.feature_value_id', '=', 'fv.id')
        ->leftJoin('feature as f', 'fv.feature_id', '=', 'f.id')
        ->where('i.supplier_id', $supplierId)
        ->groupBy('s.id')
        ->orderBy($column, 'desc')
        ->paginate();

        return $sets;
    }

    public static function getSetBySupplierWithLiker($supplierId, $type = 1, $userId = null)
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
                ->select('s.id', 's.img', 's.sum_like', 'i.id as item_id', 'i.price as item_price', 'i.discount as item_discount', 'i.name as item_name', 'u.id as user_id', DB::raw('group_concat(f.name, ": ", fv.vi_name) as features'))
                ->join('item as i', 's.main_item_id', '=', 'i.id')
                ->leftJoin('feature_value_rel_item as fvri', 'fvri.item_id', '=', 'i.id')
                ->leftJoin('feature_value as fv', 'fvri.feature_value_id', '=', 'fv.id')
                ->leftJoin('feature as f', 'fv.feature_id', '=', 'f.id')
                ->leftJoin('set_rel_liker as srl', function ($join) use ($userId) {
                    $join->on('srl.set_id', '=', 's.id')
                         ->where('srl.user_id', '=', $userId);
                })
                ->where('i.supplier_id', $supplierId)
                ->leftJoin('user as u', 'u.id', '=', 'srl.user_id')
                ->orderBy($column, 'desc')
                ->groupBy('s.id')
                ->paginate(16);

        return $sets;
    }

    public static function searchSet($supplierId, $type = 1, $itemName)
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
        ->select('s.id', 's.img', 's.sum_like', 'i.id as item_id', 'i.price as item_price', 'i.discount as item_discount', 'i.name as item_name', DB::raw('group_concat(f.name, ": ", fv.vi_name) as features'))
        ->join('item as i', 's.main_item_id', '=', 'i.id')
        ->leftJoin('feature_value_rel_item as fvri', 'fvri.item_id', '=', 'i.id')
        ->leftJoin('feature_value as fv', 'fvri.feature_value_id', '=', 'fv.id')
        ->leftJoin('feature as f', 'fv.feature_id', '=', 'f.id')
        ->where('i.supplier_id', $supplierId)
        ->where('i.name', 'like', '%' . $itemName . '%')
        ->groupBy('s.id')
        ->orderBy($column, 'desc')
        ->paginate();

        return $sets;
    }

    public static function searchSetWithLiker($supplierId, $type = 1, $userId = null, $itemName)
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
        ->select('s.id', 's.img', 's.sum_like', 'i.id as item_id', 'i.price as item_price', 'i.discount as item_discount', 'i.name as item_name', 'u.id as user_id', DB::raw('group_concat(f.name, ": ", fv.vi_name) as features'))
        ->join('item as i', 's.main_item_id', '=', 'i.id')
        ->leftJoin('feature_value_rel_item as fvri', 'fvri.item_id', '=', 'i.id')
        ->leftJoin('feature_value as fv', 'fvri.feature_value_id', '=', 'fv.id')
        ->leftJoin('feature as f', 'fv.feature_id', '=', 'f.id')
        ->leftJoin('set_rel_liker as srl', function ($join) use ($userId) {
            $join->on('srl.set_id', '=', 's.id')
                 ->where('srl.user_id', '=', $userId);
        })
        ->where('i.supplier_id', $supplierId)
        ->where('i.name', 'like', '%' . $itemName . '%')
        ->leftJoin('user as u', 'u.id', '=', 'srl.user_id')
        ->orderBy($column, 'desc')
        ->groupBy('s.id')
        ->paginate(16);

        return $sets;
    }
}
