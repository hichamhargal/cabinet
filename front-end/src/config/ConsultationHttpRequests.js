/**
 * Created by MohamedAmine on 2/16/17.
 */

var home = require('./HttpRequests') + "consultation";


var ConsultationHttpRequests = {
    listConsultation: home+"/list",
    getConsultation: home+"/get/",
    listSymptome: home + "/symptome/list",
    listDiagnostic: home + "/diagnostic/list",
    listExamen: home + "/examen/list",

};
module.exports = ConsultationHttpRequests;