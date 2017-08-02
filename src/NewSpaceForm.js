import React, {Component} from 'react';

class NewSpaceForm extends Component {

    render() {
        return (
            <div>
                <h2>Create a new Space</h2>
                <label htmlFor="">Name</label>
                <br/>
                <input type="text" id="name" placeholder="Name"/>
                <br/>
                <label htmlFor="">Memory</label>
                <br/>
                <input type="text" id="memory" placeholder="Memory"/>
                <br/>
                <label htmlFor="">Disk</label>
                <br/>
                <input type="text" id="disk" placeholder="Disk"/>
                <br/>
                <button>Create</button>
            </div>
        )
    }
}

export default NewSpaceForm