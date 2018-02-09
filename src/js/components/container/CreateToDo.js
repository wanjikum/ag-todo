import React, {PropTypes} from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
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
        this.toDoRow = this.toDoRow.bind(this);
    }
    onToDochange(event){
        const toDoItem = this.state.toDoItem;
        toDoItem.title = event.target.value;
        this.setState({toDoItem: toDoItem});

    }

    onClickSave(){
        this.props.dispatch(toDoActions.createToDo(this.state.toDoItem));
    }

    toDoRow(toDo, index){
        return <div key={index}>{toDo.title}</div>;
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
                </div>
                <div className="row">
                    <input
                        className = "col-sm-offset-2 col-sm-2 btn btn-lg btn-primary"
                        type="submit"
                        onClick={this.onClickSave}
                        value="save"
                    />
                </div>
                <h2>To Do Items</h2>
                {this.props.toDos.map(this.toDoRow)}
            </div>
        );
    }
}

CreateToDo.propTypes = {
    dispatch: PropTypes.func.isRequired,
    toDos: PropTypes.array.isRequired
};
function mapStateToProps(state, ownProps){
    return {
        toDos: state.toDos
    };
}



export default connect(mapStateToProps)(CreateToDo);


