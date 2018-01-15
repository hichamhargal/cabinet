import "./css/table.css";
import "./css/panel.css";
var React = require('react');
var createReactClass = require('create-react-class');
var Patient = require('./Patient');
var MaladeCreator = require('./MaladeCreator');
var MaladeDelete = require('./MaladeDelete');

var MaladePanel = createReactClass({
    onChangeRadio: function(id,event) {
        this.props.unSelect();
        this.props.onChangeRadio(id);
    },
    renderDeleteButton: function() {
        if(this.props.enableDelete)
            return (
                <button className="btn btn-danger" data-toggle="modal"
                        data-target="#maladeDeleteModal" >
                    <i className="fa fa-trash-o"></i>
                    Supprimer un Patient
                </button>
            );
        else {
            return (
                <button className="btn btn-danger" data-toggle="modal"
                        data-target="#maladeDeleteModal" disabled>
                    <i className="fa fa-trash-o"></i>
                    Supprimer un Patient
                </button>
            );
        }
    },
    render: function() {
        var _style = {
            height: this.props.divHeight+"px"
        };
        var table_style = {
            height: (this.props.divHeight - 210 ) +"px"
        };
        var tableHeader_style = {
            height: 56 +"px",
            width: "100%",
            overflowY: "hidden"
        };
        const malades = this.props.malades;
        return (
            <div className="panel panel-default" style={_style}>
                <div className="panel-heading">Gestion des Malades</div>
                <div className="panel-body">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="btn-group col-md-6" role="group" aria-label="modifications">
                                <button className="btn btn-success" data-toggle="modal" data-target="#maladeCreatorModal"><i className="fa fa-user-plus"></i> Ajouter un Patient</button>
                                {this.renderDeleteButton()}
                            </div>
                            <MaladeDelete selectedMalade={this.props.selectedMalade} delete={this.props.delete} />
                            <MaladeCreator existMalade={this.props.existMalade} />
                            <div className="input-group col-md-4 col-md-offset-7">
                                <input type="text" className="form-control pull-right col-md-2 col-md-offset-10"
                                       placeholder="recherche..."
                                       onChange={this.props.handleSearch}
                                />
                            </div>
                        </div>
                        <p></p>
                        <div className="table-responsive" style={tableHeader_style}>
                            <table className="table table-sm table-hover table-condensed table-fixed">
                                <thead>
                                <tr>
                                    <th className="xsmallSpace">
                                        <div className="radio">
                                            <label><input type="radio" name="optradio" checked={false} onChange={this.onChangeRadio.bind(this,-1)}/> #</label>
                                        </div>
                                    </th>
                                    <th className="mediumSpace">Prenom</th>
                                    <th className="mediumSpace">Nom</th>
                                    <th className="smallSpace">Sexe</th>
                                    <th className="mediumSpace">Date de Naissance</th>
                                    <th className="largeSpace">Adresse</th>
                                </tr>
                                </thead>
                            </table>
                        </div>
                        <div className="scroll" style={table_style}>
                            <table className="table table-sm table-hover table-condensed table-scrollable table-fixed">
                                <tbody>
                                {malades.map(function(col, j) {
                                    return <Patient id={j} key={j} instance={col} edit={this.props.edit(j)}
                                                    handleChange={this.props.handleChange}
                                                    handleClick={this.props.handleClick}
                                                    unSelect={this.props.unSelect}
                                                    onChangeRadio={this.props.onChangeRadio}
                                    />;
                                },this)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
module.exports = MaladePanel;