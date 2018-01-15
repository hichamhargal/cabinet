/**
 * Created by MohamedAmine on 2/6/17.
 */
import "./css/table.css";
var React = require('react');
var createReactClass = require('create-react-class');
var TableTd = require('./TableTd');

var size ={
    firstName: {
        size: "mediumSpace",
        type: "text"
    },
    lastName: {
        size: "mediumSpace",
        type: "text"
    },
    gender: {
        size: "smallSpace",
        type: "select"
    },
    birthDate: {
        size: "mediumSpace",
        type: "date"
    },
    address: {
        size: "largeSpace",
        type: "text"
    },
};
var attributes = ["firstName","lastName","gender","birthDate","address"];
var Patient = createReactClass({
    handleClick: function(id){
        this.props.handleClick(id,this.props.id);
    },
    handleChange: function(id,data){
        this.props.handleChange(id,this.props.instance.id,data);
    },
    onChangeRadio: function(id,event) {
        this.props.unSelect();
        this.props.onChangeRadio(id);
    },
    render: function() {
        const patient = this.props.instance;
        var elementsToRender =[];
        var el;
        const edit = this.props.edit;
        attributes.forEach(function(attr){
            var sizeEl = size[attr];
            el = (
                <TableTd key={attr} id={attr}
                         edit={edit[attr]}
                         size={sizeEl.size}
                         type={sizeEl.type}
                         data={patient[attr]}
                         handleClick={this.handleClick}
                         handleChange={this.handleChange}
                         unSelect={this.props.unSelect}
                />
            );
            elementsToRender.push(el);
        },this);
        return (
            <tr>
                <th className="xsmallSpace" scope="row">
                     <div className="radio">
                    <label><input type="radio" name="optradio" onChange={this.onChangeRadio.bind(this,patient.id)}/> {patient.id}</label>
                </div>
                    </th>
                {elementsToRender}
            </tr>
        );
    }
});

module.exports = Patient;
