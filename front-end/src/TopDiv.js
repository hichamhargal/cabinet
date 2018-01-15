var React = require('react');
var createReactClass = require('create-react-class');


var TopDiv = createReactClass({
  handleSelect: function() {},
  render: function() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <p className="navbar-text">Welcome To My App</p>
            <span className="navbar-right navbar-text">
              <button type="button" className="btn btn-link"><i className="fa fa-sign-out"></i>Logout</button>
            </span>
          </div>
        </nav>
    </div>
    );
  }
});

module.exports = TopDiv;
