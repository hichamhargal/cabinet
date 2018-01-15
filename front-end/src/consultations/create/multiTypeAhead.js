import { backToJsonArray, deleteFromJsonArray } from '../../functions/jsonArray.js';
var React = require('react');
var createReactClass = require('create-react-class');
var Typeahead = require('react-bootstrap-typeahead').Typeahead;
// var TypeAheadStandard = require("./typeAheadStandard");
import { Button  } from 'react-bootstrap';



var MultiTypeAhead = createReactClass({
    getInitialState: function() {
        return {
            ShownDataTypeAhead: [],
            lastSelected: null,
            listRender: [],
        };
    },
    componentDidMount: function() {
        this.setState({
            ShownDataTypeAhead: this.props.DataTypeAhead,
        });
    },
    handleChangeTypeAhead: function(selectedItems) {
        var selected = null;
        if(selectedItems.length >= 1)
        {
            selected =selectedItems[0];
        }
        this.setState({
            lastSelected: selected
        });
        return selected;
    },
    handleUnselect: function(selectedItem) {
        //all previously selected items: ex symptomes or diagnostics
        var Oldselected = this.props.Selected;
        var ShownDataTypeAhead = this.state.ShownDataTypeAhead;
        var DataTypeAhead = this.props.DataTypeAhead;
        var newShownDataTypeAhead = backToJsonArray(DataTypeAhead,ShownDataTypeAhead,selectedItem);
        var NewSelected = deleteFromJsonArray(Oldselected,selectedItem);
        var renderList = this.renderList(NewSelected);
        this.setState({
            ShownDataTypeAhead:newShownDataTypeAhead,
            listRender: renderList,
        });
        this.props.setSelected(NewSelected);
        return true;
    },
    handleClick: function(e) {
        e.preventDefault();
        if(this.state.lastSelected == null)
            return false;
        //item selected in the typeahead
        var selectedItem = this.state.lastSelected;

        //all previously selected symptomes/dignostic
        var selected= this.props.Selected;

        //list of remaining unselected symptomes before this last selection
        var OldShownDataTypeAhead = this.state.ShownDataTypeAhead;

        //new list of remaining unselected symptomes
        var ShownDataTypeAhead= deleteFromJsonArray(OldShownDataTypeAhead,selectedItem.id);

        selected.push(selectedItem);
        var renderList = this.renderList(selected);
        this.setState({
            ShownDataTypeAhead: ShownDataTypeAhead,
            listRender: renderList,
            lastSelected: null
        });
        this.props.setSelected(selected);
        // this.refs.typeahead.getInstance().clear();
        this.refs[this.props.label].getInstance().clear();
        // this._typeahead.getInstance().clear();
        // const instance = this._typeahead.getInstance();
        // instance.clear();
        return true;
    },
    handleClickUnselct: function(){
        var selected =[];
        this.props.setSelected(selected);
        this.setState({
            ShownDataTypeAhead: this.props.DataTypeAhead,
            lastSelected: null,
            listRender: [],
        });
    },
    renderList: function(list) {
        var renderList= [];
        var item;
        var _this=this;
        list.forEach(function(element){
            item = (
                <li key={element.id} className="list-group-item">
                    <span className="badge" onClick={_this.handleUnselect.bind(_this,element.id)}><i className="fa fa-times" aria-hidden="true"></i></span>
                    {element.description}
                </li>
            );
            renderList.push(item);
        });
        return renderList;
    },
    render: function(){
        var ButtonAdd = this.state.lastSelected == null ? "btn btn-default disabled" : "btn btn-info";
        var ButtonReset = this.props.Selected.length > 0 ? "btn btn-warning" : "btn btn-default disabled";
        var PanelActive = this.props.Selected.length < 1 ? "panel panel-primary hidden" : "panel panel-primary"
        return (
            <div>
                <div className="form-group">
                    <label  className="col-sm-2 control-label">{this.props.label}</label>
                    <div className="col-sm-10">
                        <Typeahead
                            ref={this.props.label}
                            onChange={this.handleChangeTypeAhead}
                            options={this.state.ShownDataTypeAhead}
                            placeholder="Cliquer ou Taper ..."
                            labelKey="description"
                            submitFormOnEnter={true}
                        />
                        <div className="btn-group mr-2" role="group" aria-label="First group">
                                <Button type="submit" className={ButtonAdd} onClick={this.handleClick}>
                                    <i className="fa fa-level-down" aria-hidden="true"> Ajouter dans la liste</i>

                                </Button>
                            <Button className={ButtonReset} onClick={this.handleClickUnselct}>
                                <i className="fa fa-undo" aria-hidden="true"> Annuler la Selection</i>

                            </Button>
                            <Button className="btn btn-success">
                                <i className="fa fa-plus" aria-hidden="true"> Créer</i>

                            </Button>
                            </div>
                    </div>
                </div>
                <div className={PanelActive}>
                    <div className="panel-heading">{this.props.label} selectionnés</div>
                    <div className="panel-body">
                        <ul className="list-group">
                            {this.state.listRender}
                        </ul>
                    </div>
                </div>
            </div>
        );
    },
});

module.exports = MultiTypeAhead;