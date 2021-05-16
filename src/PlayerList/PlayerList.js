import React from "react";
import Player from "../Player/Player";
import './PlayerList.css';

class PlayerList extends React.Component {

    constructor(props) {
        super(props);
    }

    handleUpdatePlayer = (playerName, newState) => {
        this.props.onUpdatePlayer(playerName, newState);
    }
    
    handleRemovePlayer = (playerName) => {
        this.props.onRemovePlayer(playerName);
    }

    render() {
        
        const players = Object.keys(this.props.players).map(i => (
            <Player name={i} onUpdate={this.handleUpdatePlayer} onRemove={this.handleRemovePlayer} 
            selected={this.props.players[i].selected} excluded={this.props.players[i].excluded} 
            chosen={this.props.players[i].chosen} games={this.props.players[i].games}/>
        ))
        
        return (
            <div className='playerContainer'>
                {players}
            </div>
        );
    }
}

export default PlayerList;
