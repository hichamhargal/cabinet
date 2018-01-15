/**
 * Created by MohamedAmine on 2/16/17.
 */

var home = require('./HttpRequests') + "medicament";


var MedicamentHttpRequests = {
    listMedicament: home+"/list",

};
module.exports = MedicamentHttpRequests;