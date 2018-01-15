import React from 'react';
var createReactClass = require('create-react-class');

var TopDiv = require('./TopDiv');
var LeftDiv = require('./leftDiv');
var Main = require('./Main');


var MainContainer = createReactClass({
    getInitialState: function() {
        return {
            fullHeight: window.innerHeight,
            fullWidth: window.innerWidth,
            compToRender: 'home'
        };
    },
    handleLeftDiv: function(choice) {
        var compToRender;
        if(choice === "malades") {
            compToRender = "malades";
        }
        else if(choice === "home")
        {
            compToRender = "home";
        }
        else if (choice === "consultations")
        {
            compToRender = "consultations";
        }
        else if (choice === "medicaments")
        {
            compToRender = "medicaments";
        }
        this.setState({
            compToRender: compToRender
        });
    },
    componentDidMount () {
        this.setState({
            fullHeight: window.innerHeight
        });
        if( typeof window !== 'undefined' )
            window.addEventListener('resize', this.onResize, false)
    },

    componentWillUnmount () {
        if( typeof window !== 'undefined' )
            window.removeEventListener('resize', this.onResize)
    },
    onResize: function() {
        this.setState({
            fullHeight: window.innerHeight
        });
    },
    render: function() {
        var _width = {
            width: this.state.fullWidth
        };
        var _height = (this.state.fullHeight - 110);
        return (
            <div className="container" onResize={this.onResize} style={_width}>
                <div className="row">
                    <div className="col-sm-12">
                        <TopDiv />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <LeftDiv onChoose={this.handleLeftDiv} divHeight={_height}/>
                    </div>
                    <div className="col-sm-10">
                        <Main compToRender={this.state.compToRender} divHeight={_height}/>
                    </div>
                </div>
            </div>
        );
    }
});
module.exports = MainContainer;
