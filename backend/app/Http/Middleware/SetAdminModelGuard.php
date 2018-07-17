<?php

namespace App\Http\Middleware;

use Closure;

class SetAdminModelGuard
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
        config(['auth.defaults.guard' => 'admins']);
        return $next($request);
    }
}
