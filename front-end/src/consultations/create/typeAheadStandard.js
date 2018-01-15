var React = require('react');
var createReactClass = require('create-react-class');
var Typeahead = require('react-bootstrap-typeahead').Typeahead;


var TypeAheadStandard = createReactClass({
    render: function(){
        return (
            <Typeahead
                ref={this.props.label}
                onChange={this.props.handleChangeTypeAhead}
                options={this.props.ShownDataTypeAhead}
                placeholder="Cliquer ou Taper ..."
                labelKey={this.props.labelKey}
                submitFormOnEnter={true}
            />
        );
    },
});

module.exports = TypeAheadStandard;