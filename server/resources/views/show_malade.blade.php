@extends('template')

@section('header')

@section('nav')

@stop


@section('contenu')
<div class="col-sm-offset-4 col-sm-4">
    <br>
    <div class="panel panel-primary">
        <div class="panel-heading">Fiche du Malade</div>
        <div class="panel-body">
            <p>Nom : {{ $malade->nom}}</p>
            <p>Prenom : {{ $malade->prenom }}</p>
            <p>CIN : {{ $malade->cin }}</p>
            <p>Sexe : {{ $malade->sexe }}</p>
            <p>Adresse : {{$malade->adresse}}</p>
            @if(!($malade->date_naissance == '0000-00-00'))
                <p>Date de Naissance : {{$malade->date_naissance}}</p>
            @else
                <p>Date de Naissance : </p>
            @endif
        </div>
    </div>

</div>


@if(isset($malade->consultations))
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>Date</th>
                <th>Ordonnance</th>
                <th>Symptomes</th>
                <th>Diagnostic</th>
                <th>Examens Complémentaires</th>
            </tr>
            </thead>
            <tbody>
            @foreach($malade->consultations->reverse() as $consultation)
                <tr>
                    <td>{{$consultation->date}}</td>
                    <td>{{trim($consultation->ordonnance)}}</td>
                    <td><?php foreach ($consultation->symptomes as $symptome) echo '<p>' .trim($symptome->description) .'</p>';?></td>
                    <td><?php foreach ($consultation->diagnostics as $diagnostic) echo '<p>' .trim($diagnostic->description) .'</p>';?></td>
                    <td><?php foreach ($consultation->examens as $examens) echo '<p>' .trim($examens->description) .'</p>';?></td>
                </tr>
            @endforeach
            </tbody>
        </table>


@endif
<a href="javascript:history.back()" class="btn btn-primary">
    <span class="glyphicon glyphicon-circle-arrow-left"></span> Retour
</a>
    @stop

@section('scripts')

@stop