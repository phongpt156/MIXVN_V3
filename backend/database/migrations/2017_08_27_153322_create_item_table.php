<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateItemTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('item', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->float('price', 12, 3);
            $table->float('discount', 12, 3)->nullable();
            $table->mediumInteger('sum_like')->default(0);
            $table->mediumInteger('sum_buy')->default(0);
            $table->mediumInteger('sum_mark')->default(0);
            $table->string('img');
            $table->string('alt_img')->nullable();
            $table->string('tag');
            $table->smallInteger('gender_id');
            $table->integer('category_id');
            $table->integer('supplier_id');
            $table->boolean('active');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('item');
    }
}
