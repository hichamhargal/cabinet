/**
 * Created by MohamedAmine on 2/14/17.
 */
import './css/table.css';
var React = require('react');
var createReactClass = require('create-react-class');
var DateTime = require('react-datetime');
import "./react-datetime.css";
require('moment/locale/fr');

var TableDate = createReactClass({
    render: function() {
        const size = this.props.size;
        const data = this.props.data;
        return (
            <td className={size} >
                <DateTime
                    viewMode="years"
                    input={false}
                    closeOnSelect={true}
                    timeFormat="dd/MM/YYYY"
                    defaultText={data+""}
                    onChange={this.props.handleChange}
                />
            </td>
        );
    }
});
module.exports = TableDate;
