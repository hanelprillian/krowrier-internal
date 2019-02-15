<?php

namespace App\Http\Controllers\Internal;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ServicePackageCtrl extends Controller
{
    public function index()
    {
        return view('internal.dashboard');
    }
}
