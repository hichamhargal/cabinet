var React = require('react');
var createReactClass = require('create-react-class');
var MultiTypeAhead = require("./multiTypeAhead");


var Symptome = createReactClass({
    render: function(){
        const label="Symptomes";
        const customRender=false;
        // console.log(this.props.SymptomeDataTypeAhead);
        return (
            <MultiTypeAhead Selected={this.props.SelectedSymptomes}
                            DataTypeAhead={this.props.SymptomeDataTypeAhead}
                            setSelected={this.props.setSelectedSymptomes}
                            label={label}
                            cusomRender={customRender}
            />
        );
    },
});

module.exports = Symptome;