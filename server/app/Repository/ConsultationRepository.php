<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 19/07/17
 * Time: 15:31
 */

namespace App\Repository;


use App\Models\Consultation;
use App\Models\Examen;
use App\Models\Symptome;
use App\Models\Diagnostic;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Collection;

class ConsultationRepository
{
    protected $consultation;

    public function __construct(Consultation $consultation)
    {
        $this->consultation = $consultation;
    }
    public function getConsultationList()
    {
        //return $this->consultation->user->all();
//       return Consultation::with('malade')->first();
//        return Consultation::with('malade')->select('id','malades.nom')->first();




        $consultationList= Consultation::with(['malade'=> function( $q) {
            $q->select('id','nom','prenom');
        }])->orderBy('id','desc')->get();

        return $consultationList->map(function ($consultation) {
           return collect($consultation->toArray())->only(['id','date','malade'])->all();
        });
    }
    public function getConsultation($id)
    {
        $consultation =  Consultation::with(['malade','symptomes','examens','diagnostics'])->findOrFail($id);
        return $consultation;
    }
    public function listSymptomes()
    {
        return Symptome::all();
    }
    public function listDiagnostics()
    {
        return Diagnostic::all();
    }
    public function listExamens()
    {
        return Examen::all();
    }
}