<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ConsultationExamen extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('consultation_examen', function(Blueprint $table) {
            $table->increments('id');
            $table->integer('consultation_id')->unsigned();
            $table->integer('examen_id')->unsigned();
            $table->foreign('consultation_id')->references('id')->on('consultations')
                ->onDelete('restrict');

            $table->foreign('examen_id')->references('id')->on('examens')
                ->onDelete('restrict');
        });
    }

    public function down()
    {
        Schema::table('consultation_examen', function(Blueprint $table) {
            $table->dropForeign('consultation_examen_consultation_id_foreign');
            $table->dropForeign('consultation_examen_examen_id_foreign');
        });

        Schema::drop('consultation_symptome');
    }
}
