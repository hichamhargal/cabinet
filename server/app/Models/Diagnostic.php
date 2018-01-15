<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Diagnostic extends Model
{
    public $timestamps = true;
    protected $table = 'diagnostics';

    public function consultations()
    {
        return $this->belongsToMany('App\Models\Consultation');
    }
}
