/**
 * Created by user on 19/07/17.
 */
/**
 * Created by MohamedAmine on 2/6/17.
 */


var React = require('react');
var createReactClass = require('create-react-class');
var ConsultationPanel = require('./consultationPanel');
var axios = require('axios');
var ConsultationHttpRequests = require('../config/ConsultationHttpRequests');
var ProgressWait = require('../state/ProgressWait');
var ErrorPanel = require('../state/ErrorPanel');


var ConsultationContainer = createReactClass({
    getInitialState: function() {
        return {
            consultations: [],
            searchedConsultations : [],
            search: '',
            symptoms: [],
            diagnostics: [],
            examens: [],
            progress: true,
            serverError: false
        };
    },
    componentDidMount: function() {
        var _this = this;
        const config = {
            onDownloadProgress: _this.onProgress,
        };
        this.serverRequest = axios.get(ConsultationHttpRequests.listConsultation,config)
            .then(function (result) {
                const consultations = result.data;
                _this.setState({
                    consultations: consultations,
                    searchedConsultations: consultations,
                    progress: false,
                    serverError: false,
                });
            })
            .catch(function(error){
                _this.setState({
                    consultations: [],
                    searchedConsultations: [],
                    progress: false,
                    serverError: true,
                });
            });
    },
    onProgress: function(){
        this.setState({
            progress: true
        });
    },
    searchConsultations(event){
        const data= event.target.value.toLowerCase();
        const consultations = this.state.consultations;
        if(data === '') {
            this.setState({
                searchedConsultations: consultations,
                search:''
            });
            return;
        }
        var consultationString;
        var searchResults =[];
        var consultation;
        for (var i=0;i<consultations.length;i++){
            consultation = consultations[i];
            consultationString = consultation.date+" "+consultation.malade.nom+" "+consultation.malade.prenom;
            consultationString = consultationString.toLowerCase();
            if(consultationString.search(data) !== -1) {
                searchResults.push(consultation);
            }
        }
        this.setState({
            searchedConsultations: searchResults,
            search: data
        });
        return;
    },
    render: function() {
        const progress = this.state.progress;
        const serverError = this.state.serverError;
        if(progress)
        {
            return (
                <ProgressWait divHeight={this.props.divHeight}/>
            );
        }
        if(serverError)
        {
            return <ErrorPanel divHeight={this.props.divHeight} errorMsg="Network Error!"/>;
        }
        return (
            <ConsultationPanel
                consultations={this.state.searchedConsultations}
                divHeight={this.props.divHeight}
                handleSearch={this.searchConsultations}
                search={this.state.search}
            />
        );
    }
});
module.exports = ConsultationContainer;
