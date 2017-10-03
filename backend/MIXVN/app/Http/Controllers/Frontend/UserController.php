<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Traits\Socialite;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTExceptions;

class UserController extends Controller
{
    use Socialite;

    public function getUser()
    {
        $user = JWTAuth::parseToken()->authenticate();
        return response()->json(compact('user'), 200);
    }
}
