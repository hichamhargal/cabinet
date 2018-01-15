/**
 * Created by user on 21/07/17.
 */

import '../css/table.css';

var React = require('react');
var createReactClass = require('create-react-class');
var Moment = require('moment');
//var ConsultationCell = require = ('./consultationCell');


var Consultation = createReactClass({
    getInitialState: function() {
        return {
            hover: false,
        }
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
    toggleModal: function(id) {
        this.props.showModal(id);
    },
    hideModal: function(){
        this.setState({
            show: false
        });
    },
    render: function() {
        var buttons = (<div></div>);
        var icon = (<div></div>);
        var consultation = this.props.instance;
        var searchString = this.props.searchString;
        var borderless = {
            borderTopStyle: "none",
            borderBottomStyle: "none"
        };
        if(this.state.hover)
        {
            icon = <i className="fa fa-arrow-right fa-4x" aria-hidden="true"></i>;
            buttons = (
                <div className="btn-group " role="group" aria-label="control">
                    <button type="button" className="btn btn-primary" onClick={this.toggleModal.bind(this,consultation.id)}><i className="fa fa-info fa-1x" aria-hidden="true">Details</i></button>
                    <button type="button" className="btn btn-warning"><i className="fa fa-pencil fa-1x" aria-hidden="true">Modifier</i> </button>
                    <button type="button" className="btn btn-danger"><i className="fa fa-trash fa-1x" aria-hidden="true">Supprimer</i></button>



                </div>
            );
        }
        const date = Moment(consultation.date, 'DD/MM/YYYY hh:mm');
        // const now = Moment();
        const now = Moment("11/04/2016",'DD/MM/YYYY');
        var thClass = "smallSpace";
        if(now.isSame(date,'day'))
        {
            thClass = "smallSpace bg-success";
        }
        else if(now.isSame(date,'week'))
        {
            thClass = "smallSpace bg-primary";
        }
        else if(now.isSame(date,'month'))
        {
            thClass = "smallSpace bg-info";
        }
        else if(now.isSame(date,'year'))
        {
            thClass = "smallSpace bg-warning";
        }
        // else if(now.isSame(date,'year'))
        // {
        //     thClass = "smallSpace bg-danger";
        // }
        // if(!date.isBefore(d2016))
        // {
        //     thClass = "smallSpace bg-primary";
        // }

        var malade_fullname= consultation.malade.nom + " " + consultation.malade.prenom;
        var fullnameJSX ;
        if(searchString !== '')
        {

            var begin = malade_fullname.toLowerCase().search(searchString.toLowerCase());
            if(begin !== -1)
            {
                const end = searchString.length;
                var index=0;
                var beginning ='';
                var rest='';
                if(begin > 0) {
                    beginning = malade_fullname.slice(0, begin);
                    index = begin ;
                }
                const fullnamelength = malade_fullname.length;
                var highlighted = malade_fullname.slice(index,fullnamelength);
                if(fullnamelength > begin + end)
                {
                    highlighted = malade_fullname.slice(index,begin+end);
                    rest = malade_fullname.slice(begin+end,fullnamelength)
                }
                fullnameJSX = (
                    <td className="largeSpace" >
                        {beginning}<mark>{highlighted}</mark>{rest}
                    </td>
                );
            }
            else
            {
                fullnameJSX = (
                    <td className="largeSpace">
                        {malade_fullname}
                    </td>
                );
            }

        }
        else
        {
            fullnameJSX = (
                <td className="largeSpace">
                    {malade_fullname}
                </td>
            );
        }


            return (
                <tr
                    onMouseEnter={this.handleMouseOver}
                    onMouseLeave={this.handleMouseOut} >
                    <th className={thClass} scope="row" style={borderless}>
                        {icon}
                    </th>
                    <td
                        className="mediumSpace" >
                        {consultation.date}
                    </td>

                    {fullnameJSX}
                    <td className="largeSpace" >
                        { buttons}
                    </td>
                </tr>
            );
        }
    });

module.exports = Consultation;