<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductGroupRelProductTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_group_rel_product', function (Blueprint $table) {
            $table->integer('product_group_id');
            $table->integer('product_id');
            $table->integer('sum_like')->default(0);
            $table->integer('sum_buy')->default(0);
            $table->integer('sum_mark')->default(0);
            $table->timestamps();
            $table->primary(['product_group_id', 'product_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_group_rel_product');
    }
}
