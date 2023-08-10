<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    $todos = Http::get('https://jsonplaceholder.typicode.com/todos')->json();

    return Inertia::render('Welcome', [
        'title' => 'Welcome Page',
        'laravelVersion' => App::VERSION(),
        'phpVersion' => PHP_VERSION,
        'todos' => $todos
    ]);
});
