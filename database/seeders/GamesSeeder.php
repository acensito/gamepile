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
            ['id'=> '1', 'ean' => '1234567890', 'nombre' => 'Darksiders  ', 'plataforma' => 'PS4', 'created_at' => new DateTime(), 'updated_at' => new DateTime],
            ['id'=> '2', 'ean' => '1234567890', 'nombre' => 'Darksiders 2', 'plataforma' => 'PS4', 'created_at' => new DateTime(), 'updated_at' => new DateTime],
            ['id'=> '3', 'ean' => '1234567890', 'nombre' => 'Darksiders 3', 'plataforma' => 'PS4', 'created_at' => new DateTime(), 'updated_at' => new DateTime],
            ['id'=> '4', 'ean' => '1234567890', 'nombre' => 'Darksiders  ', 'plataforma' => 'PS4', 'created_at' => new DateTime(), 'updated_at' => new DateTime],
        ]);
    }
}
