<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->nullable();
            $table->string('email')->unique()->nullable();
            $table->string('password');
            $table->string('phonenumber')->unique()->nullable();
            $table->string('facebook_id')->unique()->nullable();
            $table->string('facebook_link')->unique()->nullable();
            $table->smallInteger('gender_id')->nullable();
            $table->string('avatar')->nullable();
            $table->string('avatar_original')->nullable();
            $table->boolean('active');
            $table->smallInteger('role_id');
            $table->rememberToken();
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
        Schema::dropIfExists('user');
    }
}
