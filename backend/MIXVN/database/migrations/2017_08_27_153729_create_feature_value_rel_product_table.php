<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFeatureValueRelProductTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('feature_value_rel_product', function (Blueprint $table) {
            $table->integer('feature_value_id');
            $table->integer('product_id');
            $table->timestamps();
            $table->primary('feature_value_id', 'product_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('feature_value_rel_product');
    }
}
