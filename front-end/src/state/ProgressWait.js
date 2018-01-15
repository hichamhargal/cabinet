/**
 * Created by MohamedAmine on 2/16/17.
 */

import "../css/panel.css";
var React = require('react');
var createReactClass = require('create-react-class');

var MaladePanelWait = createReactClass({
    render: function() {
        var _style = {
            height: this.props.divHeight+"px",
        };
        return (
            <div className="panel panel-default" style={_style}>
                <div className="panel-heading">Gestion des Malades</div>
                <div className="panel-body">
                    <div className="container-fluid">
                        <div className="row"><p></p></div>
                        <div className="row"><p></p></div>
                        <div className="row">
                            <div className="col-sm-offset-5 col-sm-4 center">
                                <i className="fa fa-spinner fa-spin fa-5x fa-fw"></i>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        );
    }
});
module.exports = MaladePanelWait;