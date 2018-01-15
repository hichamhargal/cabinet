<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Symptome extends Model
{
    public $timestamps = true;
    protected $table = 'symptomes';

    public function consultations()
    {
        return $this->belongsToMany('App\Models\Consultation');
    }
}
