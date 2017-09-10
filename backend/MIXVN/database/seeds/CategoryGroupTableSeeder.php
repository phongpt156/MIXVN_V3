<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class CategoryGroupTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('category_group')->insert([
            ['gender_id' => 1, 'parent_category_id' => 2, 'order' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['gender_id' => 1, 'parent_category_id' => 2, 'order' => 2, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['gender_id' => 1, 'parent_category_id' => 2, 'order' => 3, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['gender_id' => 1, 'parent_category_id' => 2, 'order' => 4, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['gender_id' => 2, 'parent_category_id' => 2, 'order' => 5, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['gender_id' => 2, 'parent_category_id' => 2, 'order' => 6, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['gender_id' => 2, 'parent_category_id' => 2, 'order' => 7, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['gender_id' => 2, 'parent_category_id' => 2, 'order' => 8, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
        ]);
    }
}
