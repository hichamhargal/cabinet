/**
 * Created by MohamedAmine on 2/14/17.
 */
import './css/table.css';
var React = require('react');
var createReactClass = require('create-react-class');

var TableSelect = createReactClass({
    render: function() {
        const size = this.props.size;
        const data = this.props.data;
        return (
            <td className={size} >
                <select className="form-control"
                        value={data}
                        onChange={this.props.handleSelect}>
                    <option>M</option>
                    <option>F</option>
                </select>
            </td>
        );
    }
});
module.exports = TableSelect;
