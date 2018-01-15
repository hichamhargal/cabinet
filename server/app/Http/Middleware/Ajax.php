<?php

namespace App\Http\Middleware;
use App\Http\Requests;
use Closure;

class Ajax
{

    public function handle($request, Closure $next)
    {
        if ($request->ajax())
        {
            return $next($request);
        }

        abort(404);
    }

}