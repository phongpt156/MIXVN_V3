<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSupplierTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('supplier', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('address');
            $table->string('phone_number')->nullable();
            $table->smallInteger('open_time')->nullable();
            $table->smallInteger('close_time')->nullable();
            $table->integer('like')->default(0);
            $table->integer('follow')->default(0);
            $table->string('facebook_link')->nullable();
            $table->string('facebook_title')->nullable();
            $table->string('instagram_link')->nullable();
            $table->string('instagram_title')->nullable();
            $table->string('background_image')->nullable();
            $table->string('avatar')->nullable();
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
        Schema::dropIfExists('supplier');
    }
}
