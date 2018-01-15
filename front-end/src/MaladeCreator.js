/**
 * Created by MohamedAmine on 2/15/17.
 */
var React = require('react');
var createReactClass = require('create-react-class');
require('moment/locale/fr');
var MaladeCreatorComponent = require('./MaladeCreatorComponent');

var MaladeCreator = createReactClass({
    getInitialState: function() {
        return {
            malade: {
                firstName: '',
                lastName: '',
                gender: '',
                birthDate: '',
                address: ''
            },
            duplicate: false
        };
    },
    handleFirstNameChange: function(event){
        var data = event.target.value;
        var processedData = data[0].toUpperCase() + data.slice(1).toLowerCase();
        this.handleChange("firstName",processedData);
    },
    handleLastNameChange: function(event){
        var data = event.target.value.toUpperCase();
        this.handleChange("lastName",data);
    },
    handleGenderChange: function(event){
        this.handleChange("gender",event.target.value);
    },
    handleBirthDateChange: function(date){
        this.handleChange("birthDate",event.target.value);
    },
    handleAddressChange: function(event){
        this.handleChange("address",event.target.value);
    },
    handleChange: function(attribute, value) {
        var malade= this.state.malade;
        malade[attribute]= value;
        var duplicate = false;
        var thisMalade= malade.firstName+" "+malade.lastName;
        if (this.props.existMalade(thisMalade.toLowerCase()))
        {
            duplicate = true;
        }
        this.setState({
            malade: malade,
            duplicate: duplicate
        });
    },
    processKey: function(event) {
        if (event.keyCode === 13)  {
            this.submit();
        }
    },
    submit: function(event) {
        if(this.state.duplicate)
            console.log(this.state);
    },
    render: function() {
        document.onkeypress = this.processKey;
        return (
            <MaladeCreatorComponent
                handleFirstNameChange={this.handleFirstNameChange}
                handleLastNameChange={this.handleLastNameChange}
                handleGenderChange={this.handleGenderChange}
                handleBirthDateChange={this.handleBirthDateChange}
                handleAddressChange={this.handleAddressChange}
                submit={this.submit}
                malade={this.state.malade}
                duplicate={this.state.duplicate}
            />
        );
    }
});
module.exports = MaladeCreator;