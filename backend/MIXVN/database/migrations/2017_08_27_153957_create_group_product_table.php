<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGroupProductTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('group_product', function (Blueprint $table) {
            $table->increments('id');
            $table->string('xs_img');
            $table->string('sm_img');
            $table->string('md_img');
            $table->string('lg_img');
            $table->string('xl_img');
            $table->string('alt_img')->nullable();
            $table->string('description_img')->nullable();
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
        Schema::dropIfExists('group_product');
    }
}
