var React = require('react');
var createReactClass = require('create-react-class');
var MultiTypeAhead = require("./multiTypeAhead");


var Examen = createReactClass({
    render: function(){
        const label="Examens";
        const customRender=false;
        return (
            <MultiTypeAhead Selected={this.props.Selected}
                            DataTypeAhead={this.props.DataTypeAhead}
                            setSelected={this.props.setSelected}
                            label={label}
                            cusomRender={customRender}
            />
        );
    },
});

module.exports = Examen;