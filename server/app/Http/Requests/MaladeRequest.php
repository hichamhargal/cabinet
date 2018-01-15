<?php

namespace App\Http\Requests;

use App\Http\Requests\Request;

class MaladeRequest extends Request
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'nom' => 'required|max:50|string',
            'prenom' =>  'max:50|string',
            'cin' => 'max:20|alpha',
            'sexe' => 'string|min:1|max:1',
            'adresse' => 'string|max:200',
            'dateNaissance' => 'string',
            'dateAjout' => 'string'
        ];
    }
}
