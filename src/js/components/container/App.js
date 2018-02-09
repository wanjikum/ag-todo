import {React} from 'react';

class App extends React.Component{
    render(){
        return (
            <div className="container">
                <h1>Let's do this!</h1>
                {this.props.children}
            </div>

        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;
 
