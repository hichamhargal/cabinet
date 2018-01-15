<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ConsultationDiagnostic extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('consultation_diagnostic', function(Blueprint $table) {
            $table->increments('id');
            $table->integer('consultation_id')->unsigned();
            $table->integer('diagnostic_id')->unsigned();
            $table->foreign('consultation_id')->references('id')->on('consultations')
                ->onDelete('restrict');

            $table->foreign('diagnostic_id')->references('id')->on('diagnostics')
                ->onDelete('restrict');
        });
    }

    public function down()
    {
        Schema::table('consultation_diagnostic', function(Blueprint $table) {
            $table->dropForeign('consultation_diagnostic_consultation_id_foreign');
            $table->dropForeign('consultation_diagnostic_diagnostic_id_foreign');
        });

        Schema::drop('consultation_diagnostic');
    }
}
