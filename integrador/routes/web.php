<?php

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

Route::get('/', 'Chat@index');

Route::get('/obtener-mensajes', 'Chat@obtenerMensajes');

Route::post('/crear-mensaje', 'Chat@crearMensaje');