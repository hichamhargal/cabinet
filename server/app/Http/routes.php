<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('home');
});

Route::post('malade/modify/', array('as' => 'maladeModify', 'uses' =>'MaladeController@modifyMalade'));

Route::get('malade', 'MaladeController@index');
Route::get('listMalade', 'MaladeController@listMalades');
Route::get('recherche', 'MaladeController@rechercheIndex');
Route::post('executeSearch', array ('as' => 'executeSearch', 'uses' =>'MaladeController@executeSearch'));
Route::get('malade/voir', 'MaladeController@getMalade');
Route::get('malade/voir/{id}', array('as' => 'voir', 'uses' => 'MaladeController@voirMalade'))->where('id','[0-9]+');;
Route::get('malade/modifier/{id}', array('as' => 'modifier', 'uses' =>'MaladeController@editMalade'))->where('id','[0-9]+');
Route::post('malade/update/{id}', array('as' => 'maladeUpdate', 'uses' =>'MaladeController@updateMalade'))->where('id','[0-9]+');
Route::put('malade/update/{id}', array('as' => 'maladeUpdate', 'uses' =>'MaladeController@updateMalade'))->where('id','[0-9]+');
Route::get('malade/update/{id}', array('as' => 'maladeUpdate', 'uses' =>'MaladeController@updateMalade'))->where('id','[0-9]+');

Route::get('consultation', 'ConsultationController@index');




Route::get('malade/name', 'MaladeController@listMaladeNames');

Route::get('consultation/search/{query}', array ('as' => 'consultation/search', 'uses' =>'ConsultationController@executeSearch'));
Route::get('consultation/search/dosage/{med}/{forme}', array ('as' => 'consultation/search/dosage', 'uses' =>'ConsultationController@searchDosage'));
Route::get('consultation/search/forme/{med}', array ('as' => 'consultation/search/forme', 'uses' =>'ConsultationController@searchForme'));


Route::get( 'consultation/list','ConsultationController@listConsultations');
Route::get( 'consultation/get/{id}','ConsultationController@getConsultation')->where('id','[0-9]+');
Route::get( 'consultation/symptome/list','ConsultationController@listSymptomes');
Route::get( 'consultation/diagnostic/list','ConsultationController@listDiagnostics');
Route::get( 'consultation/examen/list','ConsultationController@listExamens');

Route::get( 'medicament/list','MedicamentController@listMedicaments');