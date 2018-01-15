<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Examen extends Model
{
    public $timestamps = true;
    protected $table = 'examens';

    public function consultations()
    {
        return $this->belongsToMany('App\Models\Consultation');
    }
}
