/**
 * Created by MohamedAmine on 2/6/17.
 */
var React = require('react');
var createReactClass = require('create-react-class');
var MaladeContainer = require('./MaladeContainer');
var Welcome = require('./welcome');
var ConsultationContainer = require('./consultations/consultationContainer');
var MedicamentContainer = require('./medicaments/medicamentContainer');

var Main = createReactClass({
    render: function () {
        var renderItem;
        const compToRender = this.props.compToRender;
        if(compToRender === "malades")
        {
            renderItem = <MaladeContainer divHeight={this.props.divHeight} />;
        }
        else if (compToRender === "home"){
            renderItem = <Welcome divHeight={this.props.divHeight} />;
        }
        else if (compToRender === "consultations"){
            renderItem = <ConsultationContainer divHeight={this.props.divHeight} />;
        }
        else if (compToRender === "medicaments"){
            renderItem = <MedicamentContainer divHeight={this.props.divHeight} />;
        }
        return renderItem;
    }
});
module.exports = Main;
