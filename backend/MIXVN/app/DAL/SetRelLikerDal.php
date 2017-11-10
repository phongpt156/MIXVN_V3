<?php

namespace App\DAL;

use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class SetRelLikerDAL
{
    public static function getSetRelLiker($userId, $setId)
    {
        $setRelLiker = DB::table('set_rel_liker')
                         ->select('set_id', 'user_id')
                         ->where('user_id', $userId)
                         ->where('set_id', $setId)
                         ->first();
        return $setRelLiker;
    }

    public static function store($userId, $setId)
    {
        $now = Carbon::now('UTC');
        DB::table('set_rel_liker')
          ->insert(['user_id' => $userId, 'set_id' => $setId, 'created_at' => $now, 'updated_at' => $now]);
    }

    public static function delete($userId, $setId)
    {
        $setRelLiker = DB::table('set_rel_liker')
                         ->where('user_id', $userId)
                         ->where('set_id', $setId)
                         ->delete();
    }
}
