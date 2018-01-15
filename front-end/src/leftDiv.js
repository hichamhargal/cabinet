
var React = require('react');
var createReactClass = require('create-react-class');
var LeftDiv = createReactClass({
    handleSelect: function() {},
    handleClick: function (i,event) {
        event.preventDefault();
        this.props.onChoose(i);
    },
    render: function () {
        var leftStyle = {
            height: this.props.divHeight+"px"
        };
        // var wellStyle = {
        //     overflowY: "scroll",
        // };
        var wellStyle ={};
        return (
            <div className="sidebar-nav" style={leftStyle}>
                <div className="well full-height" style={wellStyle}>
                    <ul className="nav nav-list">
                        <li className="nav-header">Admin Menu</li>
                        <li><a onClick={this.handleClick.bind(this,"home")} href="#"><i className="fa fa-hospital-o " ></i> Dashboard</a></li>
                        <li><a onClick={this.handleClick.bind(this,"malades")} href="#"><i className="fa fa-male" aria-hidden="true"></i> Gestion des Malades</a></li>
                        <li><a onClick={this.handleClick.bind(this,"consultations")} href="#"><i className="fa fa-stethoscope" ></i> Gestion des Consultations</a></li>
                        <li><a href="#"><i className="fa fa-medkit" ></i> Gestion des Ordonnances</a></li>
                        <li className="nav-divider"></li>
                        <li><a onClick={this.handleClick.bind(this,"medicaments")} href="#"><i className="fa fa-plus-square" ></i> Gestion des Medicaments</a></li>
                        <li><a href="#"><i className="fa fa-cogs"></i> Paramètes</a></li>
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = LeftDiv;
