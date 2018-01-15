/**
 * Created by MohamedAmine on 8/12/17.
 */
var React = require('react');
var createReactClass = require('create-react-class');
var MedicamentPanel = require('./medicamentPanel');
var MedicamentContainer = createReactClass({
    getInitialState: function() {
        return {
            medicaments: [],
        };
    },
    render: function() {
        return (
            <MedicamentPanel
                // consultations={this.state.consultations}
                divHeight={this.props.divHeight}
            />
        );
    }
});
module.exports = MedicamentContainer;
