<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class FeatureTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('feature')->insert([
            ['name' => 'Màu sắc', 'active' => true, 'order' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Chất liệu', 'active' => true, 'order' => 2, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Họa tiết', 'active' => true, 'order' => 3, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Kích cỡ', 'active' => true, 'order' => 4, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')]
        ]);
    }
}
