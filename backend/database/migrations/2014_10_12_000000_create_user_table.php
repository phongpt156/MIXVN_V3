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
            $table->string('password')->nullable();
            $table->string('phonenumber')->nullable();
            $table->string('birthday', 11)->nullable();
            $table->string('hometown')->nullable();
            $table->string('location')->nullable();
            $table->string('facebook_id')->unique()->nullable();
            $table->smallInteger('gender_id')->nullable();
            $table->string('avatar')->nullable();
            $table->string('cover')->nullable();
            $table->boolean('active');
            $table->smallInteger('role_id')->nullable();
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
