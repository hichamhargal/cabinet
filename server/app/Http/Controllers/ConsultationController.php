<?php

namespace App\Http\Controllers;

use App\Models\Medicament;
use App\Repository\ConsultationRepository;
use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Str;
use Symfony\Component\Console\Input\Input;

class ConsultationController extends Controller
{
    protected $consultationRepository;
    public function __construct(ConsultationRepository $consultationRepository)
    {
        $this->consultationRepository= $consultationRepository;
//        $this->middleware('ajax', ['only' => ['listConsultations']]);
    }
    public function index()
    {
        return view('consultation');
    }
    public function executeSearch($search)
    {
        //$search = Str::lower($request->only('medicament'));
        $medicaments = Medicament::select('id','nom')->distinct()->where('nom', 'LIKE', '%' .$search. '%')->get();
        return $medicaments;
    }
    public function searchForme($nom)
    {
        return Medicament::select('forme')->distinct()->where('nom',$nom)->get();
    }
    public function searchDosage($nom,$forme)
    {
        return Medicament::select('dosage','unite')->distinct()->where('nom',$nom)->where('forme',$forme)->get();
    }

    public function listConsultations()
    {
        return $this->consultationRepository->getConsultationList();
    }
    public function getConsultation($id)
    {
        return $this->consultationRepository->getConsultation($id);
    }
    public function listSymptomes()
    {
        return $this->consultationRepository->listSymptomes();
    }
    public function listDiagnostics()
    {
        return $this->consultationRepository->listDiagnostics();
    }
    public function listExamens()
    {
        return $this->consultationRepository->listExamens();
    }
}
