<?php

namespace App\Constants;

class Admin
{
    protected const SUPER_ADMIN = 1;

    public static function getSuperAdmin()
    {
        return self::SUPER_ADMIN;
    }
}
