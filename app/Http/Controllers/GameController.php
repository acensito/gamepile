<?php

namespace App\Http\Controllers;

use App\Models\Game;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Intervention\Image\ImageManagerStatic as Image;

class GameController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $data = Game::where('name', 'LIKE', '%'.$request->search.'%')->get();
        return Inertia::render('Dashboard', ['items' => $data]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('AddGame');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $validated = $request->validate([
            'name' => 'required|string',
            'ean' =>  'max:13',
            'platform' => 'required'
        ]);

        // Descargar la imagen y manipularla con Intervention Image
        //$image = Image::make(file_get_contents($request->image_url));
        $image = file_get_contents($request->image_url);

        $name = substr($request->image_url, strrpos($request->image_url, '/') + 1);

        $filename = time() . '.' . $name;

        Storage::put('public/covers/'.$filename, $image);

        $game = new Game();

        $game->name = $request->name;
        $game->ean = $request->ean;
        $game->platform = $request->platform;
        $game->format = $request->format;
        $game->image = 'storage/covers/'.$filename;

        $game->save();

        return Inertia::render('AddGame');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
