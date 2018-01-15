/**
 * Created by MohamedAmine on 2/6/17.
 */
import './css/table.css';
var React = require('react');
var createReactClass = require('create-react-class');
var ReactTooltip = require('react-tooltip');

var TableText = createReactClass({
    render: function() {
        const size = this.props.size;
        const data = this.props.data;
        return (
                <td className={size} >
                    <p ref='tt' data-tip='Appuyer sur Entree Pour Valider'>
                    <input autoFocus onKeyPress={this.props.handleKeyPress}
                           className="form-control"
                           type="text" defaultValue={data+""}
                    />
                    <ReactTooltip place="bottom" type="info" effect="solid"/>
                    </p>
                </td>
            );
    }
});
module.exports = TableText;
