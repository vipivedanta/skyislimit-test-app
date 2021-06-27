<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SpaController extends Controller
{
    
    /**
     * Render the SPA
     */
    public function index()
    {
    	return view('spa.index');
    }
}
