var React = require('react');
var createReactClass = require('create-react-class');

const display = {
    display: 'block',
    backgroundColor: "absolute",
    //backgroundColor: "#ffffff",
    // top: "0%",
    // left: "40%"
};
const hide = {
    display: 'none'
};
var modal_content_style = {
    height: (window.innerHeight -200) +"px",
    width: "100%",
    overflowY: "scroll"
};
var ConsultationViewer = createReactClass({
    render: function() {
        var date = '';
        var prenom = '';
        var nom ='';
        var symptomeArray = [];
        var diagnosticArray = [];
        var examenArray = [];
        var ordonnanceArray = [];
        if (!this.props.show)
        {
            return null;
        }
        else
        {
            var consultation = this.props.consultation;
            nom = consultation.malade.nom;
            prenom = consultation.malade.prenom;
            date = consultation.date;
            var ordonnance = consultation.ordonnance.replace( /\n/g, "__--DE__");
            var ordonnanceList = ordonnance.split("__--DE__");
            var symptomeList = consultation.symptomes;
            var diagnosticList = consultation.diagnostics;
            var examenList = consultation.examens;
            for (var i=0 ; i< symptomeList.length; i++)
            {
                var temp =  symptomeList[i];
                symptomeArray.push(
                    <span key={i} className="col-sm-12">
                                    <p className="col-sm-5 col-sm-offset-4">{temp.description}</p>
                </span>
                );
            }
            for (i=0 ; i< examenList.length; i++)
            {
                temp =  examenList[i];
                examenArray.push(
                    <span key={i} className="col-sm-12">
                                    <p className="col-sm-5 col-sm-offset-4">{temp.description}</p>
                </span>
                );
            }
            for (i=0 ; i< diagnosticList.length; i++)
            {
                temp =  diagnosticList[i];
                diagnosticArray.push(
                    <span key={i} className="col-sm-12">
                                    <p className="col-sm-5 col-sm-offset-4">{temp.description}</p>
                </span>
                );
            }
            for (i=0 ; i< ordonnanceList.length; i++)
            {
                temp =  ordonnanceList[i];
                ordonnanceArray.push(
                    <span key={i} className="col-sm-12">
                                    <p className="col-sm-5 col-sm-offset-4">{temp}</p>
                </span>
                );
            }
        }
        return (
            <div className="modal" id="consultationViewerModal" style={this.props.show ? display : hide} aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Details</h5>
                            <button type="button" className="close" aria-label="Close" onClick={this.props.hideModal}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body" style={modal_content_style}>
                            <div className="row">
                                <span className="label label-info col-sm-3 col-sm-offset-0">Date de Consultation</span>
                                <p className="col-sm-7 col-sm-offset-4">{date}</p>
                            </div>
                            <div className="row">
                                <span className="label label-info col-sm-3 col-sm-offset-0">Patient</span>
                                <br/>
                                <span className="col-sm-12">
                                    <span className="label label-default col-sm-2 col-sm-offset-2">Nom</span>
                                    <p className="col-sm-5 col-sm-offset-0">{nom}</p>
                                </span>
                                <br/>
                                <span className="col-sm-12">
                                    <span className="label label-default col-sm-2 col-sm-offset-2">Prenom</span>
                                    <p className="col-sm-5 col-sm-offset-0">{prenom}</p>
                                </span>
                            </div>
                            <div className="row">
                                <span className="label label-info col-sm-3 col-sm-offset-0">Symptomes</span>
                                {
                                    symptomeArray.map(function(s)
                                    {
                                        return s;
                                    })}
                            </div>
                            <div className="row">
                                <span className="label label-info col-sm-3 col-sm-offset-0">Examens Complementaires</span>
                                {
                                    examenArray.map(function(s)
                                    {
                                        return s;
                                    })}
                            </div>
                            <div className="row">
                                <span className="label label-info col-sm-3 col-sm-offset-0">Diagnostic</span>
                                {
                                    diagnosticArray.map(function(s)
                                    {
                                        return s;
                                    })}
                            </div>
                            <div className="row">
                                <span className="label label-info col-sm-3 col-sm-offset-0">Ordonnance</span>
                                {
                                    ordonnanceArray.map(function(s)
                                    {
                                        return s;
                                    })}
                            </div>
                            <div className="row">
                                <span className="label label-info col-sm-3 col-sm-offset-0">Notes</span>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={this.props.hideModal}>Fermer</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
module.exports = ConsultationViewer;