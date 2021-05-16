import React from "react";
import './AddPlayer.css';

class AddPlayer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: false,
            excluded: false,
        }
    }

    callbackFunction = (e) => {
        e.preventDefault();
        const name = document.getElementById("pname").value;
        this.props.onAddPlayer(name);
    }

    render() {
        return (
            <div className='form'>
                <form id="frm1" onSubmit={(e) => this.callbackFunction(e)}>
                    <input type="button" onClick={(e) => this.callbackFunction(e)} value="Add Player"/>
                    <input type="text" id="pname"/>
                </form>
            </div>
        );
    }
}

export default AddPlayer;
