<?php

namespace Database\Seeders;

use DateTime;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GamesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('games')->delete();

        DB::table('games')->insert([
            ['id'=> '1', 'ean' => '1234567890', 'nombre' => 'Darksiders  ', 'plataforma' => 'PS4', 'image' => 'https://es.static.webuy.com/product_images/Juegos/PS4%20Juegos/9006113009146_s.jpg', 'created_at' => new DateTime(), 'updated_at' => new DateTime],
            ['id'=> '2', 'ean' => '1234567890', 'nombre' => 'Darksiders 2', 'plataforma' => 'PS4', 'image' => 'https://es.static.webuy.com/product_images/Juegos/PS4%20Juegos/9006113008217_s.jpg', 'created_at' => new DateTime(), 'updated_at' => new DateTime],
            ['id'=> '3', 'ean' => '1234567890', 'nombre' => 'Darksiders 3', 'plataforma' => 'PS4', 'image' => 'https://es.static.webuy.com/product_images/Juegos/PS4%20Juegos/9120080070807_s.jpg', 'created_at' => new DateTime(), 'updated_at' => new DateTime],
            ['id'=> '4', 'ean' => '1234567890', 'nombre' => 'Darksiders G', 'plataforma' => 'PS4', 'image' => 'https://es.static.webuy.com/product_images/Juegos/PS4%20Juegos/9120080074386_s.jpg', 'created_at' => new DateTime(), 'updated_at' => new DateTime],
        ]);
    }
}
