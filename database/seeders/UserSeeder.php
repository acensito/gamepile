<?php

namespace Database\Seeders;

use DateTime;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->delete();

        DB::table('users')->insert([
            ['id'=> '1', 'name' => 'Felipe R.', 'email' => 'felipe@felipe.com', 'password' => bcrypt('comemela'), 'created_at' => new DateTime(), 'updated_at' => new DateTime],
        ]);
    }
}
