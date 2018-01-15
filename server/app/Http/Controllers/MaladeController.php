<?php

namespace App\Http\Controllers;

use App\Models\Malade;
use App\Repository\MaladeRepository;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Str;
use App\Http\Requests\MaladeRequest;


class MaladeController extends Controller
{
    protected $maladeRepository;
    protected $nbrPerPage = 20;
    public function __construct(MaladeRepository $maladeRepository)
    {
        $this->maladeRepository= $maladeRepository;
        $this->middleware('ajax', ['only' => ['executeSearch']]);
    }
    
    public function index()
    {
        $malades = $this->maladeRepository->getPaginate($this->nbrPerPage);
        $links = $malades->setPath('')->render();
        return view('malade', compact('malades','links'));
    }
    public function rechercheIndex()
    {
        return view('recherche_malade');
    }

    public function executeSearch(Request $request)
    {
        $keywords = $request->only('keywords');
        $search = Str::lower($keywords['keywords']);
        $malades = Malade::all();
        $searchMalades = new Collection();
        foreach ($malades as $malade)
        {

            $fullname = Str::lower($malade->nom) . ' ' . Str::lower($malade->prenom);
            if(Str::contains($fullname, $search))
            {
                $searchMalades->add($malade);

            }

        }

        return View::make('SearchMalade')->with('malades',$searchMalades);
    }
    public function listMalades()
    {
        //return Malade::all();
        return $this->maladeRepository->getMaladeList();
    }
    public function voirMalade($id)
    {
        //return view('show_malade')->with('malade' , $this->maladeRepository->getMaladeAndConsultation($id));
        return $this->maladeRepository->getMaladeAndConsultation($id);

    }
    public function editMalade($id)
    {
        return view('edit_malade')->with('malade', $this->maladeRepository->getMalade($id));
    }
    public function updateMalade(MaladeRequest $request, $id)
    {
        $this->maladeRepository->update($request->all(), $id);
        return view('show_malade')->with('malade' , $this->maladeRepository->getMaladeAndConsultation($id));
    }
    public function modifyMalade(Request $request)
    {
        $id = $request->id;
//        return $this->maladeRepository->getMalade($id);
        return $this->maladeRepository->update($request,$id);
//        return $request;
    }
    public function listMaladeNames()
    {
        return $this->maladeRepository->getMaladeNameList();
    }
}
