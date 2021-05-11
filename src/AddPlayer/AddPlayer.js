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

    callbackFunction = () => {
        const name = document.getElementById("pname").value;
        console.log('callback');
        console.log(name);
        this.props.onAddPlayer(name);
    }

    render() {
        var clss;
        if(this.state.selected) {
            clss = 'container selected';
        } else {
            if (this.state.excluded) {
                clss = 'container excluded';
            } else {
                clss = 'container default';
            }
        }
        return (
            <div className={clss} onClick={this.toggleSelected} onContextMenu={(e)=> this.toggleExcluded(e)}>
                <form id="frm1" action="/action_page.php">
                    Add Player: <input type="text" id="pname"/>
                    <input type="button" onClick={this.callbackFunction} value="Submit"/>
                </form>
            </div>
        );
    }
}

export default AddPlayer;
