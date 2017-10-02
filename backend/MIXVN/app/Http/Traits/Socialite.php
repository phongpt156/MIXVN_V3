<?php

namespace App\Http\Traits;

use App\Http\Requests\Facebook as FacebookRequest;
use App\User;
use App\City;
use Carbon\Carbon;
use JWTAuth;

trait Socialite
{
    public function loginFacebook(FacebookRequest $request)
    {
        $user = User::where('facebook_id', $request->facebook_id)->first();

        if (!$user) {
            $user = new User;
            $now = Carbon::now('UTC');

            $user->name = $request->name;
            $user->email = $request->email;
            $user->birthday = $request->birthday;

            if ($request->hometown) {
                $hometown = explode(',', $request->hometown)[0];
                $hometown = City::where('name', 'like', '%' . $hometown . '%')->pluck('id')->first();
                if ($hometown) $user->hometown = $hometown;
            }

            if ($request->location) {
                $location = explode(',', $request->location)[0];
                $location = City::where('name', 'like', '%' . $location . '%')->pluck('id')->first();
                if ($location) $user->location = $location;
            }

            $user->facebook_id = $request->facebook_id;
            $user->gender_id = $request->gender;
            $user->avatar = $request->avatar;
            $user->cover = $request->cover;
            $user->active = true;
            $user->created_at = $now;
            $user->updated_at = $now;

            $user->save();
        }

        return response()->json(['data' => $user, 'token' => JWTAuth::fromUser($user)], 200);
    }
}
