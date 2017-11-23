<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Http\Traits\Socialite;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTExceptions;
use App\DAL\UserDAL;

class UserController extends Controller
{
    use Socialite;

    public function getUserByToken()
    {
        $user = JWTAuth::parseToken()->authenticate();
        return response()->json(compact('user'), 200);
    }

    public function getUserById($userId)
    {
        return Auth::loginUsingId($userId);
    }

    public function getSetsUserLike($userId)
    {
        return UserDAL::getSetsUserLike($userId);
    }
}
