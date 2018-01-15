var React = require('react');
var createReactClass = require('create-react-class');
var MultiTypeAhead = require("./multiTypeAhead");


var Diagnostic = createReactClass({
    render: function(){
        const label="Diagnostics";
        const customRender=false;
        return (
            <MultiTypeAhead Selected={this.props.SelectedDiagnostics}
                            DataTypeAhead={this.props.DiagnosticDataTypeAhead}
                            setSelected={this.props.setSelectedDiagnostic}
                            label={label}
                            cusomRender={customRender}
            />
        );
    },
});

module.exports = Diagnostic;