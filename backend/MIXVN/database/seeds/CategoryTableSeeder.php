<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class CategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('category')->insert([
            ['name' => 'Áo phông', 'group_id' => 1, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo polo', 'group_id' => 1, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Sweater', 'group_id' => 1, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo sơ mi', 'group_id' => 2, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo 3 lỗ', 'group_id' => 2, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo len', 'group_id' => 2, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo vest', 'group_id' => 3, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo denim', 'group_id' => 3, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo Cardigan', 'group_id' => 3, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo dạ', 'group_id' => 3, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo hoodies', 'group_id' => 4, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo da', 'group_id' => 4, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo măng tô', 'group_id' => 4, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Ghi lê', 'group_id' => 4, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo phông', 'group_id' => 5, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo tanktop', 'group_id' => 5, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo kiểu', 'group_id' => 5, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo swater', 'group_id' => 5, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo sơ mi', 'group_id' => 6, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo croptop', 'group_id' => 6, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo hở vai', 'group_id' => 6, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo len', 'group_id' => 6, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo denim', 'group_id' => 7, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo dạ', 'group_id' => 7, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo phao', 'group_id' => 7, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo hoodies', 'group_id' => 8, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo cardigan', 'group_id' => 8, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo khác', 'group_id' => 8, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')]
        ]);
    }
}
