<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;



class Malade extends Model
{
    public $timestamps = true;
    protected $table = 'malades';



    public function consultations()
    {
        return $this->hasMany('App\Models\Consultation');
    }
    public function setDateNaissanceAttribute($value)
    {
        $this->attributes["dateNaissance"] = Carbon::createFromFormat('d/m/Y', $value)->format("d/m/Y");
    }
    public function getDateNaissanceAttribute($value)
    {
        try{
            $newValue = Carbon::createFromFormat('d/m/Y', $value)->format("d/m/Y");
            $this->attributes["dateNaissance"] =$newValue;
            return $newValue;
        }
        catch(\InvalidArgumentException $e)
        {
            return '';
        }
    }
}
