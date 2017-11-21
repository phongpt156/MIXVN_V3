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
                ->select('s.id', 's.img', 's.sum_like', 'i.id as item_id', 'i.price as item_price', 'i.discount as item_discount', 'i.name as item_name', 'sup.id as supplier_id', 'sup.name as supplier_name', DB::raw('group_concat(f.name, ": ", fv.vi_name) as features'))
                ->join('set_rel_item as sri', 's.id', '=', 'sri.set_id')
                ->join('item as i', function ($join) {
                    $join->on('sri.item_id', '=', 'i.id')
                         ->on('s.main_item_id', '=', 'i.id');
                })
                ->join('supplier as sup', 'i.supplier_id', '=', 'sup.id')
                ->leftJoin('feature_value_rel_item as fvri', 'fvri.item_id', '=', 'i.id')
                ->leftJoin('feature_value as fv', 'fvri.feature_value_id', '=', 'fv.id')
                ->leftJoin('feature as f', 'fv.feature_id', '=', 'f.id')
                ->groupBy('s.id')
                ->orderBy($column, 'desc')
                ->paginate();

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
                ->select('s.id', 's.img', 's.sum_like', 'i.id as item_id', 'i.price as item_price', 'i.discount as item_discount', 'i.name as item_name', 'sup.id as supplier_id', 'sup.name as supplier_name', 'u.id as user_id', DB::raw('group_concat(f.name, ": ", fv.vi_name) as features'))
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
                ->orderBy($column, 'desc')
                ->groupBy('s.id')
                ->paginate(16);

        return $sets;
    }

    public static function search($request)
    {
        if (isset($request->page) && is_integer($request->page)) {
            $page = $request->page;
        } else {
            $page = 1;
        }
        $total = 16;
        $start = ($page - 1) * $total;
        $end = $start + $total;
        $passed = '';
        $orderBy = '';
        $where = '';
        $having = '';
        $if = 'if(1, 1, 0) as passed_name';
        $limit = ' limit ' . $start . ', ' . $end;

        if (isset($request['item_name'])) {
            $where = 'where s.tag like "%' . $request['item_name'] . '%"';
            $if = 'if(i.name like "%' . $request['item_name'] . '%", 1, 0) as passed_name';
        } else {
            $having = 'having passed_item > 0 ';
        }

        foreach ($request['items'] as $key => $item) {
            $passedItemCondition = '1';

            if (isset($item['category'])) {
                $passedItemCondition .= ' and i.category_id = ' . $item['category'];
            }
            if (isset($item['price'])) {
                $passedItemCondition .= ' and i.price < ' . $item['price'];
            }

            if (isset($item['color_feature'])) {
                $passedItemCondition .= ' and instr(i.tag, "' . $item['color_feature'] . ',' . '")';
            }

            if (isset($item['size_feature'])) {
                $passedItemCondition .= ' and instr(i.tag, "' . $item['size_feature'] . ',' . '")';
            }

            if ($passed) {
                $passed .= ' + if(' . $passedItemCondition . ', 1, 0)';
            } else {
                $passed .= 'if(' . $passedItemCondition . ', 1, 0)';
            }
        }

        if ($passed) {
            $passed = 'sum(' . $passed . ') as passed_item';
            $orderBy = 'order by passed_item desc';
        } else {
            $passed = 'sum(1) as passed_item';
        }
        
        $result = DB::table('set as s')
                    ->select('s.id', 's.img', 's.sum_like', 'c.id as collection_id', 'c.name as collection_name', 'i.id as item_id', 'i.price as item_price', 'i.discount as item_discount', 'i.name as item_name', 'i.img as item_img', 'sup.id as supplier_id', 'sup.name as supplier_name', 'sup.address as supplier_address', 'tmp.passed_item as passed_item', DB::raw($if), DB::raw('group_concat(f.name, ": ", fv.vi_name) as features'))
                    ->join(DB::raw('(select s.id as id, ' . $passed . ' from `set` as s inner join set_rel_item as sri on sri.set_id = s.id inner join item as i on sri.item_id = i.id ' . $where . ' group by s.id ' . $having . $orderBy . $limit . ') as tmp'), 's.id', '=', 'tmp.id')
                    ->leftJoin('set_rel_collection as src', function ($join) {
                        $join->on('s.id', '=', 'src.set_id')
                             ->on('s.main_collection_id', '=', 'src.collection_id');
                    })
                    ->leftJoin('collection as c', 'src.collection_id', '=', 'c.id')
                    ->join('set_rel_item as sri', 's.id', '=', 'sri.set_id')
                    ->join('item as i', 'i.id', '=', 'sri.item_id')
                    ->join('supplier as sup', 'i.supplier_id', '=', 'sup.id')
                    ->leftJoin('feature_value_rel_item as fvri', 'fvri.item_id', '=', 'i.id')
                    ->leftJoin('feature_value as fv', 'fvri.feature_value_id', '=', 'fv.id')
                    ->leftJoin('feature as f', 'fv.feature_id', '=', 'f.id')
                    ->groupBy('s.id', 'i.id')
                    ->orderBy('passed_item', 'desc')
                    ->orderBy('s.id', 'asc')
                    ->orderBy('passed_name', 'desc')
                    ->get();

        return $result;
    }

    public static function searchWithLiker($request, $userId = null)
    {
        if (isset($request->page) && is_integer($request->page)) {
            $page = $request->page;
        } else {
            $page = 1;
        }
        $total = 16;
        $start = ($page - 1) * $total;
        $end = $start + $total;
        $passed = '';
        $orderBy = '';
        $where = '';
        $having = '';
        $if = 'if(1, 1, 0) as passed_name';
        $limit = ' limit ' . $start . ', ' . $end;

        if (isset($request['item_name'])) {
            $where = 'where s.tag like "%' . $request['item_name'] . '%"';
            $if = 'if(i.tag like "%' . $request['item_name'] . '%", 1, 0) as passed_name';
        } else {
            $having = 'having passed_item > 0 ';
        }

        foreach ($request['items'] as $key => $item) {
            $passedItemCondition = '1';

            if (isset($item['category'])) {
                $passedItemCondition .= ' and i.category_id = ' . $item['category'];
            }
            if (isset($item['price'])) {
                $passedItemCondition .= ' and i.price < ' . $item['price'];
            }

            if (isset($item['color_feature'])) {
                $passedItemCondition .= ' and instr(i.tag, "' . $item['color_feature'] . ',' . '")';
            }

            if (isset($item['size_feature'])) {
                $passedItemCondition .= ' and instr(i.tag, "' . $item['size_feature'] . ',' . '")';
            }

            if ($passed) {
                $passed .= ' + if(' . $passedItemCondition . ', 1, 0)';
            } else {
                $passed .= 'if(' . $passedItemCondition . ', 1, 0)';
            }
        }

        if ($passed) {
            $passed = 'sum(' . $passed . ') as passed_item';
            $orderBy = 'order by passed_item desc';
        } else {
            $passed = 'sum(1) as passed_item';
        }
        
        $result = DB::table('set as s')
                    ->select('s.id', 's.img', 's.sum_like', 'c.id as collection_id', 'c.name as collection_name', 'i.id as item_id', 'i.price as item_price', 'i.discount as item_discount', 'i.name as item_name', 'i.img as item_img', 'sup.id as supplier_id', 'sup.name as supplier_name', 'sup.address as supplier_address', 'u.id as user_id', 'tmp.passed_item as passed_item', DB::raw($if), DB::raw('group_concat(f.name, ": ", fv.vi_name) as features'), DB::raw('if(s.main_item_id = i.id, 1, 0) as main_item_id'))
                    ->join(DB::raw('(select s.id as id, ' . $passed . ' from `set` as s inner join set_rel_item as sri on sri.set_id = s.id inner join item as i on sri.item_id = i.id ' . $where . ' group by s.id ' . $having . $orderBy . $limit . ') as tmp'), 's.id', '=', 'tmp.id')
                    ->leftJoin('set_rel_collection as src', function ($join) {
                        $join->on('s.id', '=', 'src.set_id')
                             ->on('s.main_collection_id', '=', 'src.collection_id');
                    })
                    ->leftJoin('collection as c', 'src.collection_id', '=', 'c.id')
                    ->join('set_rel_item as sri', 's.id', '=', 'sri.set_id')
                    ->join('item as i', 'i.id', '=', 'sri.item_id')
                    ->join('supplier as sup', 'i.supplier_id', '=', 'sup.id')
                    ->leftJoin('feature_value_rel_item as fvri', 'fvri.item_id', '=', 'i.id')
                    ->leftJoin('feature_value as fv', 'fvri.feature_value_id', '=', 'fv.id')
                    ->leftJoin('feature as f', 'fv.feature_id', '=', 'f.id')
                    ->leftJoin('set_rel_liker as srl', function ($join) use ($userId) {
                        $join->on('srl.set_id', '=', 's.id')
                             ->where('srl.user_id', '=', $userId);
                    })
                    ->leftJoin('user as u', 'u.id', '=', 'srl.user_id')
                    ->groupBy('s.id', 'i.id')
                    ->orderBy('passed_item', 'desc')
                    ->orderBy('s.id', 'asc')
                    ->orderBy('main_item_id', 'desc')
                    ->orderBy('passed_name', 'desc')
                    ->get();

        return $result;
    }

    public static function getSetsByItem($itemId, $page = 1)
    {
        $total = 16;
        $start = ($page - 1) * $total;
        $end = $start + $total;
        $limit = 'LIMIT ' . $start . ', ' . $end;

        $result = DB::table('set as s')
                    ->select('s.id', 's.img', 's.sum_like', 'c.id as collection_id', 'c.name as collection_name', 'i.id as item_id', 'i.price as item_price', 'i.discount as item_discount', 'i.name as item_name', 'i.img as item_img', 'sup.id as supplier_id', 'sup.name as supplier_name', 'sup.address as supplier_address', DB::raw('group_concat(f.name, ": ", fv.vi_name) as features'), DB::raw('if(i.id = ' . $itemId . ', 1, 0) as main_item'))
                    ->join('set_rel_item as sri', 'sri.set_id', '=', 's.id')
                    ->join('item as i', 'sri.item_id', '=', 'i.id')
                    ->leftJoin('set_rel_collection as src', function ($join) {
                        $join->on('s.id', '=', 'src.set_id')
                             ->on('s.main_collection_id', '=', 'src.collection_id');
                    })
                    ->leftJoin('collection as c', 'src.collection_id', '=', 'c.id')
                    ->join('supplier as sup', 'i.supplier_id', '=', 'sup.id')
                    ->leftJoin('feature_value_rel_item as fvri', 'fvri.item_id', '=', 'i.id')
                    ->leftJoin('feature_value as fv', 'fvri.feature_value_id', '=', 'fv.id')
                    ->leftJoin('feature as f', 'fv.feature_id', '=', 'f.id')
                    ->join(DB::raw('(SELECT s.id as id FROM `set` AS s INNER JOIN set_rel_item AS sri ON sri.set_id = s.id INNER JOIN item AS i ON sri.item_id = i.id WHERE i.id = ' . $itemId . ' GROUP BY s.id ' . $limit . ') as tmp'), 'tmp.id', '=', 's.id')
                    ->groupBy('s.id', 'i.id')
                    ->orderBy('s.id', 'desc')
                    ->orderBy('main_item', 'desc')
                    ->get();

        return $result;
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
}
