<?php
/**
 * Created by PhpStorm.
 * User: MohamedAmine
 * Date: 4/16/16
 * Time: 2:16 PM
 */

namespace App\Repository;
use App\Models\Malade;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class MaladeRepository
{
    protected $malade;

    public function __construct(Malade $malade)
    {
        $this->malade = $malade;
    }

    public function getPaginate($n)
    {
        return $this->malade->paginate($n);
    }
    public function getMaladeAndConsultation($id)
    {
        return $this->malade->with('consultations')->findOrFail($id);
    }
    public function getMalade($id)
    {
        return $this->malade->findOrFail($id);
    }
    public function getMaladeList()
    {
        $maladeList = Malade::all();
        $arr = array();
        foreach($maladeList as $malade)
        {
            $col = collect();
            $col->put('id',$malade->id);
            $col->put('firstName',$malade->prenom);
            $col->put('lastName',$malade->nom);
            $col->put('gender',$malade->sexe);
            $col->put('birthDate',$malade->dateNaissance);
            $col->put('address',$malade->adresse);
            array_push($arr,$col);
            $malade->dateNaissance;
        }
        return $arr;
        //return $maladeList;
    }
    public function getMaladeNameList()
    {
        $maladeList = Malade::all();
        $arr = array();
        foreach($maladeList as $malade)
        {
            $col = collect();
            $col->put('id',$malade->id);
            $col->put('firstName',$malade->prenom);
            $col->put('lastName',$malade->nom);
            array_push($arr,$col);
        }
        return $arr;
    }

    public function update($inputs, $id)
    {
        $malade = $this->getMalade($id);
        $malade->nom = $inputs->lastName;
        $malade->prenom = $inputs->firstName;
        $malade->sexe = $inputs->gender;
        $malade->adresse = $inputs->address;
        $malade->dateNaissance = $inputs->birthDate;
        $malade->save();
        return $this->getMalade($id);
    }

}