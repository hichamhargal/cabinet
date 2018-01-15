@extends('template')

@section('header')

@section('nav')

@stop

@section('contenu')
    @if(isset($info))
        <div class="row alert alert-info">{{ $info }}</div>
    @endif
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <div class="form-group">
        <input type="text" id="search-input" class="form-control" placeholder="recherche" onkeydown="down()" onkeyup="up()">
    </div>
    <div class="col-lg-12" id="search-results">

    </div>
@stop

@section('scripts')
            <script> var searchurl = '{!! route('executeSearch') !!}' </script>
            {!! Html::script(asset('js/search.js')) !!}
@stop