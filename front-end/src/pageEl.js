var React = require("react");
var createReactClass = require('create-react-class');

var PageEl = createReactClass({
  render: function() {
    var element;
    if(this.props.disabled) {
        element = <li><a className="disabled">{this.props.nbr}</a></li>;
    }
    else{
        if(this.props.active) {
            element = <li><a className="active" href="" onClick={this.props.onClick}>{this.props.nbr}</a></li>;
        }
        else {
            element = <li><a href="" onClick={this.props.onClick}>{this.props.nbr}</a></li>;
        }
    }
    return element;
  }
});
module.exports = PageEl;
