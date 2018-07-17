<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class ParentCategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('parent_category')->insert([
            ['name' => 'Head', 'order' => 1, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Top', 'order' => 2, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Bot', 'order' => 3, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Foot', 'order' => 4, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Accessories', 'order' => 5, 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')]
        ]);
    }
}
