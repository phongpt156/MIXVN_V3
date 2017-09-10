<?php

namespace App\Http\Middleware;

use Closure;

class CheckSuperAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $admin = new \App\Http\Controllers\Backend\AdminController;

        if ($admin->isSuperAdmin($request)) {
            return $next($request);
        }
        
        return response()->json(['messages' => 'You have not been granted permission to perform this action'], 401);
    }
}
