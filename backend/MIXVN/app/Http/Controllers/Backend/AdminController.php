<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Signin;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTExceptions;

class AdminController extends Controller
{
    public function signin(Signin $request)
    {
        $credentials = $request->only('email', 'password');
        try {
            if (!($token = JWTAuth::attempt($credentials))) {
                return response()->json(['error' => 'Invalid Credentials!', 401]);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'Could not create token!'], 500);
        }

        return response()->json(compact('token'));   
    }

    public function getAdmin(Request $request)
    {
        $admin = JWTAuth::parseToken()->authenticate();
        return response()->json(compact('admin'), 200);
    }

    public function getRole(Request $request)
    {
        return JWTAuth::parseToken()->authenticate()->role_id;
    }

    public function isSuperAdmin(Request $request)
    {
        $role_id = $this->getRole($request);
        return $role_id === \App\Constants\Admin::getSuperAdmin();
    }
}
