/**
 * Created by MohamedAmine on 2/17/17.
 */
var axios = require('axios');
var HttpRequests = require('./config/HttpRequests');


function updateMaladeToServer(malade) {
    return axios.post(HttpRequests.updateMalade,malade);
}

var helpers = {
    getUpdatedMalade: function(malade){
        return axios.all([updateMaladeToServer(malade)])
            .then(function(result){
                console.log(result.data);
                console.log(result.status);
                return result.data;
            }) .catch(function(error){
                alert("error");
            });
    }
}

module.exports = helpers;