<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Mensaje;

class Chat extends Controller
{
    public function index()
    {
    	return view('chat');
    }


    public function obtenerMensajes(Request $request)
    {
    	$desde = intval($request->input('desde'));

    	$mensajes = Mensaje::where('id', '>', $desde)->orderBy('created_at')->get();

    	return $mensajes->toJson();
    }

    public function crearMensaje(Request $request)
    {
    	
    	$mensaje = new Mensaje;

    	$mensaje->fill($request->all());

    	$mensaje->ip = request()->ip();

    	$mensaje->save();

    	return json_encode(['resultado' => 'ok']);

    }
}
