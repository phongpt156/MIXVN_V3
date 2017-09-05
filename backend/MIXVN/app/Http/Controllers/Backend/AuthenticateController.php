<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTExceptions;

class AuthenticateController extends Controller
{
    public function authenticate(Request $request)
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
}
