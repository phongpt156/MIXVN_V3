<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user')->insert([
            'id' => 1,
            'name' => 'Thanh Phong',
            'email' => 'pthanhphong156@gmail.com',
            'password' => Hash::make('phongvip123k'),
            'active' => 1,
            'role_id' => 5,
            'created_at' => Carbon::now('UTC'),
            'updated_at' => Carbon::now('UTC')
        ]);
    }
}
