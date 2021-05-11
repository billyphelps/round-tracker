import React from "react";
import Player from "../Player/Player";
import './PlayerList.css';

class PlayerList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='playerContainer'>
                {this.props.players.map(n => (
                    <Player name={n}/>
                ))}
            </div>
        );
    }
}

export default PlayerList;
