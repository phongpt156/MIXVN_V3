<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSetRelCollectionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('set_rel_collection', function (Blueprint $table) {
            $table->integer('set_id');
            $table->integer('collection_id');
            $table->timestamps();
            $table->primary(['set_id', 'collection_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('set_rel_collection');
    }
}
