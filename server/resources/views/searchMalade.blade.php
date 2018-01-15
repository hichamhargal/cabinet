@if(isset($malades) && $malades->count() >0)
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
            <th>Modifier</th>
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
                    <td>{!! link_to_route('voir', 'Voir', [$malade->id], ['class' => 'btn btn-success btn-block']) !!}
                    {!! link_to_route('modifier', 'Modifier', [$malade->id], ['class' => 'btn btn-warning btn-block']) !!}</td>
                </tr>
            @endforeach
        </tbody>
    </table>
    </div>
    @else
        <p>Aucun Résultat!</p>
    @endif