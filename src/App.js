import React, {Component} from 'react';
import './App.css';
import NewSpaceForm from "./NewSpaceForm";

class App extends Component {

    constructor() {
        super()
        this.state = {
            displaySpaceForm: false
        }

        this.handleAddSpaceForm = this.handleAddSpaceForm.bind(this)
    }

    handleAddSpaceForm() {
        this.setState({
            displaySpaceForm: !this.state.displaySpaceForm
        })
    }

    get spaceForm() {
        if(this.state.displaySpaceForm) {
            return(<NewSpaceForm/>)
        }
    }

    render() {

        return (
            <div className="App">
                <button onClick={this.handleAddSpaceForm}>Add Space</button>
                {this.spaceForm}
            </div>
        );
    }
}

export default App;
