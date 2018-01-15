<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;


class Consultation extends Model
{
    public $timestamps = true;
    protected $table = 'consultations';

    public function malade()
    {
        return $this->belongsTo('App\Models\Malade');
    }
    public function symptomes()
    {
        return $this->belongsToMany('App\Models\Symptome');
    }
    public function diagnostics()
    {
        return $this->belongsToMany('App\Models\Diagnostic');
    }
    public function examens()
    {
        return $this->belongsToMany('App\Models\Examen');
    }
    public function getDateAttribute($value)
    {
        $date_array = explode(" ",rtrim(trim($value)));
        $date = $date_array[0];
        $time = $date_array[1];
        $time_array = explode(":",$time);
        $hours = $time_array[0];
        $minutes = $time_array[1];
        if(strlen($hours) < 2 )
            $hours = "0" . $hours;
        if(strlen($minutes) < 2 )
            $minutes = "0" . $minutes;
        $formatedDateTime = $date . " " . $hours . ":" . $minutes;
        try{
            $newValue = Carbon::createFromFormat('d/m/Y H:i', $formatedDateTime)->format("d/m/Y H:i");
            return $newValue;
        }
        catch(\InvalidArgumentException $e)
        {
            return '';
        }
    }
}
