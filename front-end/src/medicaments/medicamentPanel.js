/**
 * Created by user on 21/07/17.
 */

import "../css/table.css";
import "../css/panel.css";
// import Files from 'react-files'
var React = require('react');
var createReactClass = require('create-react-class');
// var XLSX = require('xlsx');
// var FileReaderInput = require('react-file-reader-input');


var MedicamentPanel = createReactClass({
    getInitialState: function() {
        return {
            file: null,
        };
    },
    handleChange: function(e, results) {
        // results.forEach(result => {
        //     const [e, file] = result;
        //     var workbook = XLSX.read(e.target.result);
        //     console.log(this.to_json(workbook));
        // });
    },
    to_json: function(workbook) {
    var result = {};
    console.log(workbook.SheetNames);
    // workbook.SheetNames.forEach(function(sheetName) {
    //     var roa = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
    //     if(roa.length > 0){
    //         result[sheetName] = roa;
    //     }
    // });
    return result;
},
    render: function() {
        const divHeight = this.props.divHeight;
        var _style = {
            height: divHeight+"px"
        };
        // var table_style = {
        //     height: (divHeight - 210 ) +"px"
        // };
        // var tableHeader_style = {
        //     height: 35 +"px",
        //     width: "100%",
        //     overflowY: "hidden"
        // };
        return (
            <div className="panel panel-default" style={_style}>
                <div className="panel-heading">Gestion des Consultations</div>
                <div className="panel-body">
                    <p></p>
                    {/*<FileReaderInput as="binary" id="my-file-input"*/}
                                     {/*onChange={this.handleChange}>*/}
                        {/*<button>Select a file!</button>*/}
                    {/*</FileReaderInput>*/}
                                    </div>
                                    </div>
                                    );
    }
});
module.exports = MedicamentPanel;