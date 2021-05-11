import React from "react";
import AddPlayer from "../AddPlayer/AddPlayer";
import PlayerList from "../PlayerList/PlayerList";

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        players: ['MrNinjaKoala', 'Mr P Bubblebath IV', 'Lady Bubblebath'],
    }
  }

  handleNewPlayer = (playerName) => {
    const currentPlayers = this.state.players;
    currentPlayers.push(playerName);
    this.setState({players: currentPlayers});
  }

  render() {
    return (
      <div>
      <AddPlayer onAddPlayer={this.handleNewPlayer}/>
      <PlayerList players={this.state.players}/>
    </div>
    );
  }
}

export default Main;
