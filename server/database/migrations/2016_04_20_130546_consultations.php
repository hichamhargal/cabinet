<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Consultations extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('consultations', function (Blueprint $table) {
            $table->increments('id');
            $table->string('date');
            $table->integer('malade_id')->unsigned();
            $table->string('ordonnance');
            $table->string('evolution');
            $table->string('diag_list');
            $table->string('symp_list');
            $table->string('exam_list');
            $table->timestamps();
            $table->foreign('malade_id')
                    ->references('id')
                    ->on('malades')
                    ->onDelete('restrict')
                    ->onUpdate('restrict');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('consultations', function(Blueprint $table) {
                         $table->dropForeign('consultations_malade_id_foreign');
          });
        Schema::drop('consultations');
    }
}
