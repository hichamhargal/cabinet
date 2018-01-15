<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Medicaments extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('medicaments', function (Blueprint $table) {
            $table->increments('id')->unsigned();
            $table->integer('code')->unsigned();
            $table->string('nom');
            $table->string('molecule');
            $table->string('dosage')->nullable();
            $table->string('unite')->nullable();
            $table->string('forme')->nullable();
            $table->string('presentation')->nullable();
            $table->string('ppv')->nullable();
            $table->string('ph')->nullable();
            $table->string('prix_br')->nullable();
            $table->boolean('principale');
            $table->string('taux_remboursement')->nullable();
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
        Schema::drop('medicaments');
    }
}
