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
            ['name' => 'Áo phông', 'order' => 1, 'gender_id' => 1, 'parent_category_id' => 2, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo sơ mi', 'order' => 2, 'gender_id' => 1, 'parent_category_id' => 2, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo vest', 'order' => 3, 'gender_id' => 1, 'parent_category_id' => 2, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo hoodies', 'order' => 4, 'gender_id' => 1, 'parent_category_id' => 2, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo polo', 'order' => 5, 'gender_id' => 1, 'parent_category_id' => 2, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo 3 lỗ', 'order' => 6, 'gender_id' => 1, 'parent_category_id' => 2, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo denim', 'order' => 7, 'gender_id' => 1, 'parent_category_id' => 2, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo da', 'order' => 8, 'gender_id' => 1, 'parent_category_id' => 2, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Sweater', 'order' => 9, 'gender_id' => 1, 'parent_category_id' => 2, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo len', 'order' => 10, 'gender_id' => 1, 'parent_category_id' => 2, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo Cardigan', 'order' => 11, 'gender_id' => 1, 'parent_category_id' => 2, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo măng tô', 'order' => 12, 'gender_id' => 1, 'parent_category_id' => 2, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo dạ', 'order' => 13, 'gender_id' => 1, 'parent_category_id' => 2, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Ghi lê', 'order' => 14, 'gender_id' => 1, 'parent_category_id' => 2, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo phông', 'order' => 1, 'gender_id' => 2, 'parent_category_id' => 2, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo sơ mi', 'order' => 2, 'gender_id' => 2, 'parent_category_id' => 2, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo denim', 'order' => 3, 'gender_id' => 2, 'parent_category_id' => 2, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo hoodies', 'order' => 4, 'gender_id' => 2, 'parent_category_id' => 2, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo tanktop', 'order' => 5, 'gender_id' => 2, 'parent_category_id' => 2, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo croptop', 'order' => 6, 'gender_id' => 2, 'parent_category_id' => 2, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo dạ', 'order' => 7, 'gender_id' => 2, 'parent_category_id' => 2, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo Cardigan', 'order' => 8, 'gender_id' => 2, 'parent_category_id' => 2, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo kiểu', 'order' => 9, 'gender_id' => 2, 'parent_category_id' => 2, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo hở vai', 'order' => 10, 'gender_id' => 2, 'parent_category_id' => 2, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo phao', 'order' => 11, 'gender_id' => 2, 'parent_category_id' => 2, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo khác', 'order' => 12, 'gender_id' => 2, 'parent_category_id' => 2, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo swater', 'order' => 13, 'gender_id' => 2, 'parent_category_id' => 2, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Áo len', 'order' => 14, 'gender_id' => 2, 'parent_category_id' => 2, 'active' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
        ]);
    }
}
