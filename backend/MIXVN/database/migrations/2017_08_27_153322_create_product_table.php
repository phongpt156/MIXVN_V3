<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->float('price', 12, 3);
            $table->float('discount', 12, 3)->nullable();
            $table->mediumInteger('sum_like')->default(0);
            $table->mediumInteger('sum_buy')->default(0);
            $table->mediumInteger('sum_mark')->default(0);
            $table->string('xs_img');
            $table->string('sm_img');
            $table->string('md_img');
            $table->string('lg_img');
            $table->string('xl_img');
            $table->string('alt_img')->nullable();
            $table->string('description_img')->nullable();
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
        Schema::dropIfExists('product');
    }
}