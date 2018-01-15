@extends('template2')

@section('contenu')
    <link href="css/typeahead.css" rel="stylesheet">
    <span class="twitter-typeahead">
                    <div id="remote-medicament" class="form-group">
                        {!! Form::label('medicaments','Medicament') !!}
                        {!! Form::text('medicament', '', array('id' => 'medicaments', 'autocomplete' => 'off', 'class' =>'typeahead form-control tt-input', 'spellcheck'=>'false', 'dir'=>'auto', 'placeholder' => 'liste des medicaments proposés'))!!}
                    </div>
        </span>
    <div id="forme-div" class="form-group hidden">
        {!! Form::label('formMed','Forme') !!}
        {!! Form::select('formMed')!!}
    </div>
    <div id="remote-dosage" class="form-group hidden">
        {!! Form::label('dosages','Dosage') !!}
        {!! Form::select('dosages')!!}
    </div>
    <div id="ajouter-div" class="form-group hidden">
        {!! Form::button('ajouter', array('class' => "btn btn-success btn-block btn-default")) !!}
    </div>
    <div id="ordonnance" class="table-responsive hidden">
        <table class="table">
            <thead>
            <tr>
                <th>#</th>
                <th>Medicament</th>
                <th>Forme</th>
                <th>Dosage</th>
            </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>
@stop

@section('scripts')
    {!! Html::script(asset('js/typeahead.js')) !!}
    <script type="text/javascript">
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $(document).ready(function(){
            var chosenMed;
            var chosenForme;
            var chosenDose;
            var numero=1;
            var medlist = [];
            var medicaments = new Bloodhound({
                datumTokenizer: Bloodhound.tokenizers.obj.whitespace('nom'),
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                remote: {
                    url: 'http://localhost/app1/public/consultation/search/%QUERY',
                    wildcard: '%QUERY'}
            });

            medicaments.initialize();

            $('#medicaments').typeahead({
                hint : true,
                highlight : true,
                minLength: 1
            },{
                name: 'medicaments',
                displayKey : 'nom',
                source: medicaments.ttAdapter()
            }).bind("typeahead:selected", function(obj, datum, nom) {
                $('#medicaments').effect('highlight');
                chosenMed = datum.nom;
                getForme(chosenMed);
            }).bind("typeahead:autocompleted", function(obj, datum, nom) {
                $('#medicaments').effect('highlight');
                chosenMed = datum.nom;
                getForme(chosenMed);
            });
            function getForme(med)
            {
                $("#forme-div").removeClass('hidden');
                $('#forme-div').effect('bounce',{times:2},1000);
                $("#forme-div select").attr('disabled', false);
                $("#forme-div select").empty();
                $("#remote-dosage #dosages").empty();
                $("#forme-div select").append('<option value="" selected disabled>Selectionner une forme</option>');
                $.get('http://localhost/app1/public/consultation/search/forme/'+med,function(data){
                    for(i in data)
                    {
                        //console.log(data[i].forme);
                        $("#forme-div select").append('<option>' + data[i].forme + '</option>');
                    }
                },'json');
            }
            function getDose(med, forme)
            {
                $("#remote-dosage").removeClass('hidden');
                $('#remote-dosage').effect('bounce',{times:2},1000);
                $("#remote-dosage #dosages").attr('disabled', false);
                $("#remote-dosage #dosages").empty();
                $("#remote-dosage select").append('<option value="" selected disabled>Selectionner un Dosage</option>');
                $.get('http://localhost/app1/public/consultation/search/dosage/'+med+'/'+forme,function(data){
                    for(datum in data)
                    {
                        $("#remote-dosage #dosages").append('<option>'+data[datum].dosage + data[datum].unite.toLowerCase()+'</option>');
                    }
                },'json');
            }
            $("#forme-div select").change(function(){
                $('#forme-div').effect('highlight');
                chosenForme = $(this).val();
                getDose(chosenMed,chosenForme);
            });
            $("#remote-dosage select").change(function(){
                $('#remote-dosage').effect('highlight');
                $("#ajouter-div").removeClass('hidden');
                $("#ajouter-div button").attr('disabled', false);
                $('#ajouter-div').effect('slide');
                chosenDose = $(this).val();
            });
            $('#ajouter-div button').click(function(){
                $('#ajouter-div').effect('bounce', {times:1}, 500);
                $('#ordonnance').removeClass('hidden');
                $('#ordonnance tbody').append('<tr><td>' + numero + '</td>' + '<td>' + chosenMed + '</td>' +
                        '<td>' + chosenForme + '</td>' + '<td>' + chosenDose + '</td></tr>');
                numero +=1;
                medlist.push({'medicament':chosenMed,'forme':chosenForme,'dosage':chosenDose});
                for (i in medlist)
                {
                    console.log((medlist[i]).medicament);
                    console.log((medlist[i]).forme);
                    console.log((medlist[i]).dosage);
                }
                $('.typeahead').typeahead('val','');
                $("#forme-div select").empty();
                $("#forme-div select").attr('disabled', true);
                $("#remote-dosage #dosages").empty();
                $("#remote-dosage #dosages").attr('disabled', true);
                $("#ajouter-div button").attr('disabled', true);
            });
        });

    </script>
@stop