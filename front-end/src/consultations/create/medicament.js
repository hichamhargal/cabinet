var React = require('react');
var createReactClass = require('create-react-class');
var MultiTypeAhead = require("./multiTypeAhead");


var Medicament = createReactClass({
    render: function(){
        const label="Medicaments";
        const labelKey=["nom","molecule"];
        const customRender=true;
        return (
            <MultiTypeAhead Selected={this.props.SelectedMedicaments}
                            DataTypeAhead={this.props.MedicamentDataTypeAhead}
                            setSelected={this.props.setSelectedMedicaments}
                            label={label}
                            cusomRender={customRender}
                            labelKey={labelKey}
            />
        );
    },
});

module.exports = Medicament;