/**
 * Created by MohamedAmine on 2/12/17.
 */

var React = require('react');
var createReactClass = require('create-react-class');

var Welcome = createReactClass({
    render: function() {
        var _style = {
            height: this.props.divHeight+"px"
        };
        return (
            <div className="panel panel-default" style={_style}>
                <div className="panel-heading">Welcome to the App</div>
                <div className="panel-body">
                    <p>welcome to the app</p>

                </div>
            </div>
        );
    }
});
module.exports = Welcome;
