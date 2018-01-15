@extends('template')

@section('header')

@section('nav')

@stop

@section('contenu')
    @if(isset($info))
        <div class="row alert alert-info">{{ $info }}</div>
    @endif
    {{$links}}
    <div class="panel panel-primary">
        <div class="panel-heading">
            <h3 class="panel-title">Liste des Malades</h3>
        </div>
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>Nom</th>
                <th>Prenom</th>
                <th>CIN</th>
                <th>Sexe</th>
                <th>adresse</th>
                <th>Date de Naissance</th>
            </tr>
            </thead>
            <tbody>

            @foreach($malades as $malade)
                <tr>
                    <td>{{$malade->nom}}</td>
                    <td>{{$malade->prenom}}</td>
                    <td>{{$malade->cin}}</td>
                    <td>{{$malade->sexe}}</td>
                    <td>{{$malade->adresse}}</td>
                    <td>{{$malade->date_naissance}}</td>
                </tr>
            @endforeach
            </tbody>
        </table>
    {{$links}}
@stop

@section('scripts')

@stop