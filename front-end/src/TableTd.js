/**
 * Created by MohamedAmine on 2/14/17.
 */
var React = require('react');
var createReactClass = require('create-react-class');
var TableText = require('./TableText');
var TableDate = require('./TableDate');
var TableSelect = require('./TableSelect');
var moment = require('moment');

const icons =
    {
        text: "fa fa-pencil text-center",
        select: "fa fa-pencil text-center",
        date: "fa fa-calendar text-center"
    };

var TableTd = createReactClass({
    getInitialState: function(){
        return {
            hover:false
        };
    },
    handleMouseOver: function() {
        this.setState({
            hover: true
        });
    },
    handleMouseOut: function() {
        this.setState({
            hover: false
        });
    },
    handleKeyPress: function(id,event) {
        if(event.key === "Enter")
        {
            const data = event.target.value.replace(/^\s+|\s+$/g, "").replace(/\s\s+/g, ' ');;
            const olData = event.target.defaultValue;
            if(data === olData) {
                this.props.unSelect();
                return false;
            }
            this.props.handleChange(id,data);
            return true;
        }
        return false;
    },
    handleSelect: function(id,data,event){
        var newData = event.target.value;
        if(newData === data) {
            this.props.unSelect();
            return false;
        }
        this.props.handleChange(id,newData);
        return true;
    },
    handleChange: function(id,data,date){
        if (data === '')
        {
            this.props.handleChange(id,date.format("DD/MM/YYYY"));
            return true;
        }
        const oldDate= moment(data, "DD/MM/YYYY");
        if (date > oldDate || date < oldDate)
        {
            this.props.handleChange(id,date.format("DD/MM/YYYY"));
            return true;
        }
        this.props.unSelect();
        return false;
    },
    handleClick: function(id,event){
        this.setState({
            hover: false
        });
        this.props.handleClick(id);
    },
    render: function(){
        const hover = this.state.hover;
        const edit = this.props.edit;
        const size = this.props.size;
        const id = this.props.id;
        const type = this.props.type;
        const icon = icons[type];
        var data = this.props.data;
        if(!edit){
            if(hover){
                data = <p>{data}&nbsp;&nbsp;<i className={icon} aria-hidden="true"></i></p>;
            }
            return (
                <td className={size} onClick={this.handleClick.bind(this,id)}
                    onMouseEnter={this.handleMouseOver}
                    onMouseLeave={this.handleMouseOut}>
                    {data}
                </td>
            );
        }
        if(type === "text"){
            return <TableText size={size} data={data} handleKeyPress={this.handleKeyPress.bind(this,id)} />;
        }

        if(type === "date"){
            return <TableDate size={size} data={data} handleChange={this.handleChange.bind(this,id).bind(this,data)} />;
        }
        if(type === "select"){
            return <TableSelect size={size} data={data} handleSelect={this.handleSelect.bind(this,id).bind(this,data)} />;
        }
    }
});
module.exports = TableTd;