<?php
/**
 * Created by PhpStorm.
 * User: MohamedAmine
 * Date: 8/12/17
 * Time: 3:09 PM
 */

namespace App\Repository;
use App\Models\Medicament;


class MedicamentRepository
{
    protected $medicament;

    public function __construct(Medicament $medicament)
    {
        $this->medicament = $medicament;
    }
    public function getList()
    {
        return Medicament::select('id','nom','molecule')->get();
//        return Medicament::all();
    }
}