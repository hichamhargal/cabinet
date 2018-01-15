/**
 * Created by MohamedAmine on 2/16/17.
 */

var home = require('./HttpRequests');


var MaladeHttpRequests = {
    listMalade: home+"listMalade",
    listMaladeName: home+"malade/name",
    updateMalade: home+"malade/modify/"
};
module.exports = MaladeHttpRequests;