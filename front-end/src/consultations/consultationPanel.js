/**
 * Created by user on 21/07/17.
 */

import "../css/table.css";
import "../css/panel.css";
var React = require('react');
var createReactClass = require('create-react-class');
var Consultation = require('./consultation');
var ConsultationViewer = require('./ConsultationViewer');
var axios = require('axios');
var ConsultationHttpRequests = require('../config/ConsultationHttpRequests');
var ConsultationNew = require("./consultationNew");

var ConsultationPanel = createReactClass({
    getInitialState: function() {
        return {
            chosenConsultation: null,
            showModal: false,
            serverError: false,
            showAddModal: false,
        };
    },
    closeModal: function() {
        this.setState({
            showModal: false
        });
    },
    openModal: function(consultationId) {
        var _this = this;
        this.serverRequest = axios.get(ConsultationHttpRequests.getConsultation + consultationId)
            .then(function (result) {
                const consultationDetail = result.data;
                _this.setState({
                    chosenConsultation: consultationDetail,
                    serverError: false,
                    showModal: true,
                });
            })
            .catch(function(error){
                _this.setState({
                    consultationDetail: null,
                    serverError: true,
                    showModal: false
                });
            });
    },
    openAddModal: function () {
        this.setState({
            showAddModal: true
        });
    },
    closeAddModal: function () {
        this.setState({
            showAddModal: false
        });
    },
    render: function() {
        const divHeight = this.props.divHeight;
        var _style = {
            height: divHeight+"px"
        };
        var table_style = {
            height: (divHeight - 210 ) +"px"
        };
        var tableHeader_style = {
            height: 35 +"px",
            width: "100%",
            overflowY: "hidden"
        };
        const consultations = this.props.consultations;
        return (
            <div className="panel panel-default" style={_style}>
                <div className="panel-heading">Gestion des Consultations</div>
                <div className="panel-body">
                    <ConsultationViewer consultation={this.state.chosenConsultation} show={this.state.showModal} hideModal={this.closeModal}/>
                    <ConsultationNew show={this.state.showAddModal} hideModal={this.closeAddModal}/>
                    <div className="row">
                        <div className="btn-group col-md-5 col-md-offset-0" role="group" aria-label="modifications">
                            <button className="btn btn-success" onClick={this.openAddModal}><i className="fa fa-user-plus"></i> Ajouter une Consultation</button>
                        </div>



                        <div className="input-group col-md-5 col-md-offset-2">
                            <input type="search" className="form-control pull-right col-md-2 col-md-offset-10"
                                   placeholder="recherche..."
                                   onChange={this.props.handleSearch}
                            />
                            <span id="searchclear" className="glyphicon glyphicon-remove-circle form-control-feedback" aria-hidden="true"></span>
                        </div>
                    </div>
                    <p></p>
                    <div className="table-responsive" style={tableHeader_style}>
                        <table className="table table-sm table-hover table-condensed table-fixed">
                            <thead>
                            <tr>
                                <th className="smallSpace">
                                </th>
                                <th className="mediumSpace">Date</th>
                                <th className="largeSpace">Nom du Malade</th>
                                <th className="largeSpace"></th>
                            </tr>
                            </thead>
                        </table>
                    </div>
                    <div className="scroll" style={table_style}>
                        <table className="table table-sm table-hover table-condensed table-scrollable table-fixed">
                            <tbody>
                            {consultations.map(function(col, j) {
                                return <Consultation id={j} key={j} instance={col} showModal={this.openModal} searchString={this.props.search}
                                />;
                            },this)}
                                    </tbody>
                                    </table>
                                    </div>
                                    </div>
                                    </div>
                                    );
    }
});
module.exports = ConsultationPanel;