import {React} from "react";
import {Link} from "react-router";

class CreateToDo extends React.Component{
    render(){
        return (
            <div className="jumbotron">
                <h1>Welcome to my create to do list page</h1>
                <Link to="about" className="btn btn-primary btn-lg"> create </Link>
            </div>
        );
    }

}
export default CreateToDo;


