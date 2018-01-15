@extends('template')

@section('contenu')
    <div class="col-sm-offset-4 col-sm-4">
        <br>
        <div class="panel panel-primary">
            <div class="panel-heading">Modification d'un Malade</div>
            <div class="panel-body">
                <div class="col-sm-12">
                    {!! Form::model($malade, ['route' => ['maladeUpdate', $malade->id], 'method' => 'put', 'class' => 'form-horizontal panel']) !!}
                    <div class="form-group {!! $errors->has('nom') ? 'has-error' : '' !!}">
                        {!! Form::label('nom', 'Nom') !!}
                        {!! Form::text('nom', null, ['class' => 'form-control', 'placeholder' => 'Nom']) !!}
                        {!! $errors->first('nom', '<small class="help-block">:message</small>') !!}
                    </div>
                    <div class="form-group {!! $errors->has('prenom') ? 'has-error' : '' !!}">
                        {!! Form::label('prenom', 'Prénom') !!}
                        {!! Form::text('prenom', null, ['class' => 'form-control', 'placeholder' => 'prenom']) !!}
                        {!! $errors->first('prenom', '<small class="help-block">:message</small>') !!}
                    </div>
                    <div class="form-group {!! $errors->has('cin') ? 'has-error' : '' !!}">
                        {!! Form::label('cin', 'CIN') !!}
                        {!! Form::text('cin', null, ['class' => 'form-control', 'placeholder' => 'cin']) !!}
                        {!! $errors->first('cin', '<small class="help-block">:message</small>') !!}
                    </div>
                    <div class="form-group {!! $errors->has('sexe') ? 'has-error' : '' !!}">
                        {!! Form::label('M', 'Homme') !!}
                        {!! Form::radio('sexe', 'M', $malade->sexe == 'M') !!}
                        {!! Form::label('F', 'Femme') !!}
                        {!! Form::radio('sexe', 'F', $malade->sexe == 'F') !!}
                        {!! $errors->first('sexe', '<small class="help-block">:message</small>') !!}
                    </div>
                    <div class="form-group {!! $errors->has('adresse') ? 'has-error' : '' !!}">
                        {!! Form::label('adresse', 'Adresse') !!}
                        {!! Form::text('adresse', null, ['class' => 'form-control', 'placeholder' => 'adresse']) !!}
                        {!! $errors->first('adresse', '<small class="help-block">:message</small>') !!}
                    </div>
                    <div class="form-group {!! $errors->has('date_naissance') ? 'has-error' : '' !!}">
                        {!! Form::label('date_naissance', 'Date de Naissance') !!}
                        {!! Form::date('date_naissance', null, ['class' => 'form-control', 'placeholder' => 'date_naissance']) !!}
                        {!! $errors->first('date_naissance', '<small class="help-block">:message</small>') !!}
                    </div>
                    {!! Form::submit('Envoyer', ['class' => 'btn btn-primary pull-right']) !!}
                    {!! Form::close() !!}
                </div>
            </div>
        </div>
        <a href="javascript:history.back()" class="btn btn-primary">
            <span class="glyphicon glyphicon-circle-arrow-left"></span> Retour
        </a>
    </div>
@stop