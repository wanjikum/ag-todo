import React from "react";
import {Link} from "react-router";

class EditToDo extends React.Component{
    render(){
        return (
            <div className="jumbotron">
                <h1>Welcome to Edit to do list page</h1>
                <Link to="editToDo" className="btn btn-primary btn-lg"> create </Link>
            </div>
        );
    }

}
export default EditToDo;