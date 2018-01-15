var React = require('react');
var createReactClass = require('create-react-class');
var axios = require('axios');
var listMaladeName = require('../config/MaladeHttpRequests').listMaladeName;
var listSymptome = require('../config/ConsultationHttpRequests').listSymptome;
var listDiagnostic = require('../config/ConsultationHttpRequests').listDiagnostic;
var listExamen = require('../config/ConsultationHttpRequests').listExamen;
var listMedicament = require('../config/MedicamentHttpRequests').listMedicament;
var Symptome = require("./create/symptome");
var Diagnostic = require("./create/diagnostic");
var Examen = require("./create/examen");
// var Medicament = require("./create/medicament");
var MaladeTypeAhead = require("./create/maladeTypeAhead");
var DateConsultation = require("./create/dateConsultation");
var Separator = require("./create/separator");

const display = {
    display: 'block',
    backgroundColor: "absolute",
    //backgroundColor: "#ffffff",
    // top: "0%",
    // left: "40%"
};
const hide = {
    display: 'none',
    height: (window.innerHeight -200) +"px",
    width: "100%",
    overflowY: "scroll"
};
var modal_content_style = {
    height: (window.innerHeight -200) +"px",
    width: "100%",
    overflowY: "scroll"
};
var ConsultationNew = createReactClass({
    getInitialState: function() {
        return {
            MaladeDataTypeAhead: [],
            SymptomeDataTypeAhead: [],
            DiagnosticDataTypeAhead: [],
            ExamenDataTypeAhead: [],
            MedicamentDataTypeAhead: [],
            progress: true,
            serverError: false,
            SelectedMalade: null,
            SelectedSymptomes: [],
            SelectedDiagnostics: [],
            SelectedExamens: []
        };
    },
    componentDidMount: function() {
        var _this = this;
        const config = {
            onDownloadProgress: _this.onProgress,
        };
        axios.all([this.getMaladeNames(),this.getSymptomes(),this.getDiagnostics(),this.getExamens(),this.getMedicaments()],config)
            .then(axios.spread(function (maladesAjax,symptomesAjax,diagnosticsAjax,examensAjax,medicamentAjax) {
                const maladeNames = maladesAjax.data;
                const symptomes = symptomesAjax.data;
                const diagnostics = diagnosticsAjax.data;
                const examens = examensAjax.data;
                const medicaments = medicamentAjax.data;
                var dataMalades = [];
                var dataSymptomes = [];
                var dataDiagnostics = [];
                var dataExamens = [];
                var dataMedicaments = [];
                for (var i=0; i<maladeNames.length; i++)
                {
                    dataMalades.push({id: maladeNames[i].id, fullName: maladeNames[i].firstName +' '+ maladeNames[i].lastName});
                }
                for (i=0; i<symptomes.length; i++)
                {
                    dataSymptomes.push({id: symptomes[i].id, description: symptomes[i].description});
                }
                for (i=0; i<diagnostics.length; i++)
                {
                    dataDiagnostics.push({id: diagnostics[i].id, description: diagnostics[i].description});
                }
                for (i=0; i<examens.length; i++)
                {
                    dataExamens.push({id: examens[i].id, description: examens[i].description});
                }
                for (i=0; i<medicaments.length; i++)
                {
                    dataMedicaments.push({id: medicaments[i].id, nom: medicaments[i].nom, molecule: medicaments[i].molecule});
                }
                _this.setState({
                    MaladeDataTypeAhead: dataMalades,
                    SymptomeDataTypeAhead: dataSymptomes,
                    DiagnosticDataTypeAhead: dataDiagnostics,
                    ExamenDataTypeAhead: dataExamens,
                    MedicamentDataTypeAhead: dataMedicaments,
                    progress: false,
                    serverError: false,
                });
            }))
            .catch(function(error){
                _this.setState({
                    MaladeDataTypeAhead: [],
                    SymptomeDataTypeAhead: [],
                    DiagnosticDataTypeAhead: [],
                    ExamenDataTypeAhead: [],
                    MedicamentDataTypeAhead: [],
                    progress: false,
                    serverError: true,
                });
            });
    },
    resetSelection() {
        this.setState({
            SelectedMalade: null,
            SelectedSymptomes: [],
        });
        return this.props.hideModal();
    },
    getMaladeNames: function(){
        return axios.get(listMaladeName);
    },
    getSymptomes: function(){
        return axios.get(listSymptome);
    },
    getDiagnostics: function(){
        return axios.get(listDiagnostic);
    },
    getExamens: function(){
        return axios.get(listExamen);
    },
    getMedicaments: function(){
        return axios.get(listMedicament);
    },
    onProgress: function(){
        this.setState({
            progress: true
        });
    },
    handleChangeTypeAhead: function(selectedItems) {
        var selectedItem;
        if(selectedItems.length < 1)
        {
            selectedItem = null;
        }
        else
        {
            selectedItem = selectedItems[0];
        }
        this.setState({
            SelectedMalade: [selectedItem]
        });
        return selectedItem;
    },
    setSelectedSymptomes: function(selected) {
        this.setState({
            SelectedSymptomes: selected
        });
    },
    setSelectedDiagnostics: function(selected) {
        this.setState({
            SelectedDiagnostics: selected
        });
    },
    setSelectedExamens: function(selected) {
        this.setState({
            SelectedExamens: selected
        });
    },
    handleDateConsultation: function(date)
    {
        // console.log(date.format("DD/MM/YYYY hh:mm"))
    },
    render: function(){
        if(!this.props.show)
        {
            return null;
        }
        if(this.state.progress)
        {
            return null;
        }
        if(this.state.serverError)
        {
            alert("error");
            return null;
        }
        return (
            <div className="modal" id="consultationViewerModal" style={this.props.show ? display : hide} aria-hidden="true">
                <div className="modal-dialog" role="document" >
                    <div className="modal-content" >
                        <div className="modal-header">
                            <h5 className="modal-title">Nouvelle Consultation</h5>
                            <button type="button" className="close" aria-label="Close" onClick={this.resetSelection}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body"  style={modal_content_style}>

                            <form className="form-horizontal" role="form">

                                <DateConsultation
                                    handleDateConsultation={this.handleDateConsultation}
                                />

                                <ul className="nav nav-list">
                                    <li className="nav-divider"></li>
                                </ul>

                                <MaladeTypeAhead
                                    handleChangeTypeAheadMalade={this.handleChangeTypeAhead}
                                    MaladeDataTypeAhead={this.state.MaladeDataTypeAhead}
                                />

                                <Separator />

                                <Symptome SelectedSymptomes={this.state.SelectedSymptomes}
                                          SymptomeDataTypeAhead={this.state.SymptomeDataTypeAhead}
                                          setSelectedSymptomes={this.setSelectedSymptomes}
                                />

                                <Separator />

                                <Diagnostic     SelectedDiagnostics={this.state.SelectedDiagnostics}
                                                DiagnosticDataTypeAhead={this.state.DiagnosticDataTypeAhead}
                                                setSelectedDiagnostic={this.setSelectedDiagnostics}
                                />

                                <Separator />

                                <Examen         Selected={this.state.SelectedExamens}
                                                DataTypeAhead={this.state.ExamenDataTypeAhead}
                                                setSelected={this.setSelectedExamens}
                                />

                                <Separator />

                                {/*<Medicament*/}
                                    {/*DataTypeAhead={this.state.MedicamentDataTypeAhead}*/}
                                {/*/>*/}

                                <div className="form-group">
                                    <div className="col-sm-offset-4 col-sm-4">
                                        <button type="submit" className="btn btn-primary btn-block" data-dismiss="modal" onClick={this.props.submit}>Valider</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={this.resetSelection}>Fermer</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    },
});

module.exports = ConsultationNew;