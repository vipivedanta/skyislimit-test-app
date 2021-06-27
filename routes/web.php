<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::get('/app/to-do','SpaController@index')->middleware('auth');
Route::get('/logout',function(){
	Auth::logout();
	return redirect('/');
}); // this should be a post event instead of a Link

Route::get('/login-check', function(){
	return response()->json([
		'status' => true,
		'logged' => Auth::check()
	]);
});

Route::get('/{any}', 'SpaController@index')->where('any', '.*');
