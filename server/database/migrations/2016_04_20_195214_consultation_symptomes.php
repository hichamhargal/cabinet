<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ConsultationSymptomes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('consultation_symptome', function(Blueprint $table) {
            $table->increments('id');
            $table->integer('consultation_id')->unsigned();
            $table->integer('symptome_id')->unsigned();
            $table->foreign('consultation_id')->references('id')->on('consultations')
                ->onDelete('restrict');

            $table->foreign('symptome_id')->references('id')->on('symptomes')
                ->onDelete('restrict');
        });
    }

    public function down()
    {
        Schema::table('consultation_symptome', function(Blueprint $table) {
            $table->dropForeign('consultation_symptome_consultation_id_foreign');
            $table->dropForeign('consultation_symptome_symptome_id_foreign');
        });

        Schema::drop('consultation_symptome');
    }
}
