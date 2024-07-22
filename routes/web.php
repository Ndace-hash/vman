<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::get('/', [AuthController::class, 'show']);
// Route::redirect('/', '/auth/login', 301);
