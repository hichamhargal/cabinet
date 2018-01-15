var React = require('react');
var createReactClass = require('create-react-class');
var DateTime = require('react-datetime');
var Moment = require('moment');



var DateConsultation = createReactClass({
    render:function()
    {
        return (
                                <div className="form-group">
                                    <label  className="col-sm-2 control-label">Date de Consultation</label>
                                    <div className="col-sm-10">
                                        <DateTime
                                            viewMode="years"
                                            dateFormat="DD/MM/YYYY"
                                            timeFormat={false}
                                            closeOnSelect={true}
                                            defaultValue={Moment.now()}
                                            closeOnTab={true}
                                            onChange={this.props.handleDateConsultation}
                                        />
                                    </div>
                                </div>
        );
    },
});

module.exports = DateConsultation;