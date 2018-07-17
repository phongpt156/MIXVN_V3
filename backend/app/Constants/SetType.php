<?php

namespace App\Constants;

class SetType
{
    protected const NEWEST = 1;
    protected const MOST_LIKE = 2;
    protected const DISCOUNT = 3;

    public static function getNewest()
    {
        return self::NEWEST;
    }

    public static function getMostLike()
    {
        return self::MOST_LIKE;
    }

    public static function getDiscount()
    {
        return self::DISCOUNT;
    }
}
