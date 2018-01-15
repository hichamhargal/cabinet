var React = require('react');
var createReactClass = require('create-react-class')


var Separator = createReactClass({
    render: function(){
        return (
            <ul className="nav nav-list">
                <li className="nav-divider"></li>
            </ul>
        );
    },
});

module.exports = Separator;