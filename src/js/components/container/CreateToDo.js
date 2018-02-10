import React, {PropTypes} from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as toDoActions from "./../../actions/toDoActions";

class CreateToDo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            toDoItem: {
                title: ''
            }
        };
        this.onToDochange = this.onToDochange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }
    onToDochange(event){
        const toDoItem = this.state.toDoItem;
        toDoItem.title = event.target.value;
        this.setState({toDoItem: toDoItem});

    }

    onClickSave(){
        this.props.actions.createToDo(this.state.toDoItem);
    }

    toDoRow(toDo, index){
        return (
                <tr>
                    <td>
                        {toDo.id}
                    </td>
                    <td>
                        {toDo.title}
                    </td>
                    <td className="col-sm-1">
                        <button type="button" className="btn btn-default btn-primary">
                            <span className="glyphicon glyphicon-edit"></span>
                        </button>
                    </td>
                    <td className="col-sm-1">
                        <button type="button" className="btn btn-default btn-danger">
                            <span className="glyphicon glyphicon-trash"></span>
                        </button>
                    </td>    
                </tr>
            );
    }
 

    render(){
        return (
            <div className="container">
                <div className="row">
                    <input
                        className ="col-sm-6 input-lg"
                        placeholder = "What do you want to do?"
                        type="text"
                        onChange={this.onToDochange}
                        value={this.state.toDoItem.title}
                    />
                
                    <input
                        className = "col-sm-offset-1 col-sm-2 btn btn-lg btn-primary"
                        type="submit"
                        onClick={this.onClickSave}
                        value="save"
                    />
                </div>
                <h2>To Do Items</h2>
                <div className="table-responsive col-sm-10">
                <table className="table table-bordered table-hover table-condensed">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>To do title</th>
                            <th>Delete</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.toDos.map(this.toDoRow)}
                    </tbody>
                </table>
            </div>
        </div>
        );
    }
}

CreateToDo.propTypes = {
    actions: PropTypes.object.isRequired,
    toDos: PropTypes.array.isRequired
};
function mapStateToProps(state, ownProps){
    return {
        toDos: state.toDos
    };
}
function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(toDoActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateToDo);


