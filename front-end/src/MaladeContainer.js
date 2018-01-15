/**
 * Created by MohamedAmine on 2/6/17.
 */
import './css/table.css';
import './css/panel.css';
var React = require('react');
var createReactClass = require('create-react-class');
var axios = require('axios');
var MalData = require('./data_malades');
var MaladePanel = require('./MaladePanel');
var ErrorPanel = require('./state/ErrorPanel');
var ProgressWait = require('./state/ProgressWait');
var MaladeHttpRequests = require('./config/MaladeHttpRequests');

var MaladeContainer = createReactClass({
    getInitialState: function() {
        return {
            malades: [],
            edit : {
                row: -1,
                firstName: false,
                lastName: false,
                gender: false,
                birthDate: false,
                address: false
            },
            searchResults: [],
            selectedRadio: -1,
            selectedMalade: {},
            progress: true,
            serverError: false
        };
    },
    updateMaladeToServer: function(malade) {
        return axios.post(MaladeHttpRequests.updateMalade,malade);
    },
    updateMaladeState: function(malade) {
        const index = malade.id;
        var malades = this.state.malades;
        malades[index] = malade;
        this.setState({
            malades: malades
        });
    },
    componentDidMount: function() {
        var _this = this;
        const config = {
            onDownloadProgress: _this.onProgress,
        };
        this.serverRequest = axios.get(MaladeHttpRequests.listMalade,config)
            .then(function (result) {
                const malades = result.data.map(function(mal,index,array) {
                    //return _this.filterMaladeFromServer(mal);
                    return mal;
                });
                _this.setState({
                    malades: malades,
                    searchResults: malades,
                    progress: false,
                    serverError: false,
                });
            })
            .catch(function(error){
                _this.setState({
                    malades: MalData,
                    searchResults: MalData,
                    progress: false,
                    serverError: true,
                });
            });
    },
    onProgress: function(){
        this.setState({
            progress: true
        });
    },
    resetEdit: function() {
        return  {
            row: -1,
            firstName: false,
            lastName: false,
            gender: false,
            birthDate: false,
            address: false
        };
    },
    handleClick: function(id,row){
        var edit = this.resetEdit();
        edit.row = row;
        edit[id] = true;
        this.setState({
            edit: edit
        });
    },
    getEdit: function(row){
        const editProp = this.state.edit;
        if(editProp.row === row) {
            return {
                firstName: editProp.firstName,
                lastName: editProp.lastName,
                gender: editProp.gender,
                birthDate: editProp.birthDate,
                address: editProp.address
            };
        }
        return {
            firstName: false,
            lastName: false,
            gender: false,
            birthDate: false,
            address: false
        };
    },
    handleChange: function(id,row,data){
        this.unSelect();
        var malades = this.state.malades;
        var index;
        var result = malades.find(function (d) {
            if(d.id === row) {
                index= malades.indexOf(d);
                return true;
            }
            return false;
        },index);
        if(!result){
            return false;
        }
        var malade = malades[index];
        malade[id] = data;
        malades[index] = malade;
        var _this = this;
        this.updateMaladeToServer(malade)
            .then(function(result){
                //_this.updateMaladeState(_this.filterMaladeFromServer(result.data));
                _this.updateMaladeState(result.data);
            })
            .catch(function(error){
                alert(error);
            });
    },
    unSelect: function(){
        this.setState({
            edit: this.resetEdit()
        });
        return;
    },
    handleSearch: function(event){
        this.unSelect();
        const data= event.target.value.toLowerCase();
        const malades = this.state.malades;
        if(data === '') {
            this.setState({
                searchResults: malades
            });
            return;
        }
        var maladeString;
        var searchResults =[];
        var malade;
        for (var i=0;i<malades.length;i++){
            malade = malades[i];
            maladeString = malade.firstName+" "+malade.lastName+" "+malade.address;
            maladeString = maladeString.toLowerCase();
            if(maladeString.search(data) !== -1) {
                searchResults.push(malade);
            }
        }
        this.setState({
            searchResults: searchResults
        });
        return;

    },
    onChangeRadio: function(id) {
        this.setState({
            selectedRadio: id,
            selectedMalade: this.selectedMalade(id)
        });
    },
    delete: function() {
        alert("deleted");
    },
    selectedMalade: function(row) {
        if(row === -1){
            return {};
        }
        const malades = this.state.malades;
        var index;
        var result = malades.find(function (d) {
            if(d.id === row) {
                index= malades.indexOf(d);
                return true;
            }
            return false;
        },index);
        if(!result){
            return null;
        }
        return malades[index];
    },
    existMalade: function(thisMalade) {
        var data = thisMalade.toLowerCase();
        const malades = this.state.malades;
        var maladeString;
        var malade;
        for (var i=0;i<malades.length;i++){
            malade = malades[i];
            maladeString = malade.firstName+" "+malade.lastName;
            maladeString = maladeString.toLowerCase();
            if(maladeString === data) {
                return true;
            }
        }
    },
    render: function() {
        const progress = this.state.progress;
        const serverError = this.state.serverError;
        var elementToRender;
        if(serverError)
        {
            elementToRender = <ErrorPanel divHeight={this.props.divHeight} errorMsg="Network Error!"/>;
        }
        else
        {
            if(progress)
            {
                elementToRender = <ProgressWait divHeight={this.props.divHeight}/>;
            }
            else{
                elementToRender = (
                    <MaladePanel malades={this.state.searchResults} divHeight={this.props.divHeight} edit={this.getEdit}
                                 handleChange={this.handleChange}
                                 handleClick={this.handleClick}
                                 unSelect={this.unSelect}
                                 handleSearch={this.handleSearch}
                                 onChangeRadio={this.onChangeRadio}
                                 delete={this.delete}
                                 selectedMalade={this.state.selectedMalade}
                                 enableDelete={(this.state.selectedRadio !== -1)}
                                 existMalade={this.existMalade}
                    />
                );
            }
        }
        return elementToRender;
    }
});
module.exports = MaladeContainer;
