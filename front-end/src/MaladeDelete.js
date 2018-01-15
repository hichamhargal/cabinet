/**
 * Created by MohamedAmine on 2/15/17.
 */
import './modal.css';
var React = require('react');
var createReactClass = require('create-react-class');

var MaladeDelete = createReactClass({
    render: function() {
        const malade = this.props.selectedMalade;
        return (
            <div className="modal fade" id="maladeDeleteModal" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Suppression</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Etes vous sûr de vouloir supprimer le Malade suivant:</p>
                            <p>Prenom: {malade.firstName}</p>
                            <p>Nom: {malade.lastName}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={this.props.delete}>Supprimer</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Annuler</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
module.exports = MaladeDelete;