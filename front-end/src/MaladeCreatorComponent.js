/**
 * Created by MohamedAmine on 2/15/17.
 */
import './modal.css';
var React = require('react');
var createReactClass = require('create-react-class');
var DateTime = require('react-datetime');
import "./react-datetime.css";

var MaladeCreatorComponent = createReactClass({
    render: function() {
        var errorComp ='';
        if (this.props.duplicate)
        {
            const malade = this.props.malade;
            var fullName= malade.firstName + " " + malade.lastName;
            errorComp=(                            <div className="alert alert-danger" role="alert">
                    <strong>Attention!</strong> le nom <strong>{fullName}</strong> existe déjà.
                </div>
            );
        }
        return (
            <div className="modal fade" id="maladeCreatorModal" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Ajouter un nouveau Malade</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="form-horizontal" role="form">
                                <div className="form-group">
                                    <label  className="col-sm-2 control-label">Prénom</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control"
                                               placeholder="prénom"
                                               onChange={this.props.handleFirstNameChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label  className="col-sm-2 control-label">Nom</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control"
                                               placeholder="nom"
                                               onChange={this.props.handleLastNameChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label  className="col-sm-2 control-label">Sexe</label>
                                    <div className="col-sm-10">
                                        <select className="form-control" onChange={this.props.handleGenderChange}>
                                            <option selected disabled>Choisir Sexe</option>
                                            <option>M</option>
                                            <option>F</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label  className="col-sm-2 control-label">Date de Naissance</label>
                                    <div className="col-sm-10">
                                        <DateTime
                                                  viewMode="years"
                                                  dateFormat="DD/MM/YYYY"
                                                  timeFormat={false}
                                                  closeOnSelect={true}
                                                  closeOnTab={true}
                                                  onChange={this.props.handleBirthDateChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label  className="col-sm-2 control-label">Adresse</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control"
                                               placeholder="adresse"
                                               onChange={this.props.handleAddressChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-offset-4 col-sm-4">
                                        <button type="submit" className="btn btn-primary btn-block" data-dismiss="modal" onClick={this.props.submit}>Valider</button>
                                    </div>
                                </div>
                            </form>
                            {errorComp}
                        </div>
                        <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Fermer</button>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
module.exports = MaladeCreatorComponent;