var React = require('react');
var createReactClass = require('create-react-class');
var Typeahead = require('react-bootstrap-typeahead').Typeahead;


var MaladeTypeAhead = createReactClass({
    render: function(){
        return (
            <div className="form-group">
                <label  className="col-sm-2 control-label">Malade</label>
                <div className="col-sm-10">
                    <Typeahead
                        onChange={this.props.handleChangeTypeAheadMalade}
                        options={this.props.MaladeDataTypeAhead}
                        placeholder="Cliquer ou Entrez le nom/prenom du malade"
                        labelKey="fullName"
                        multiple={false}
                        bsSize="medium"
                        // selected={this.props.selectedMalade}
                    />
                </div>
            </div>
        );
    },
});

module.exports = MaladeTypeAhead;