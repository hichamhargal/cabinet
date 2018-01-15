<?php

namespace App\Http\Controllers;

use App\Repository\MedicamentRepository;
use Illuminate\Http\Request;

use App\Http\Requests;

class MedicamentController extends Controller
{
    protected $medicamentRepository;
    public function __construct(MedicamentRepository $medicamentRepository)
    {
        $this->medicamentRepository= $medicamentRepository;
    }
    public function listMedicaments()
    {
        return $this->medicamentRepository->getList();
    }
}
