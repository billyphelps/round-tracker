import React from "react";
import './Main.css';
import AddPlayer from "../AddPlayer/AddPlayer";
import ControlButton from "../Control Button/ControlButton";
import PlayerList from "../PlayerList/PlayerList";

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      players: {
        'Player 1': {selected: false, excluded: false, chosen: false, games: 0}
      },
    }
  }

  handleNewPlayer = (playerName) => {
    const currentPlayers = this.state.players;
    currentPlayers[playerName] = {selected: false, excluded: false, chosen: false, games: 0};
    this.setState({players: currentPlayers});
  }

  handleUpdatePlayer = (playerName, newState) => {
    let currentPlayers = this.state.players;
    Object.keys(newState).map(prop => {currentPlayers[playerName][prop] = newState[prop]});
    this.setState({players: currentPlayers});
  }

  handleRemovePlayer = (playerName) => {
    let currentPlayers = this.state.players;
    delete currentPlayers[playerName];
    this.setState({players: currentPlayers});
  }

  choosePlayer = () => {
    let currentState = this.state.players;

    //players selected to be in the next round
    const selectedPlayers = Object.keys(currentState).filter(player => currentState[player].selected);

    //players not selected and also not excluded
    let potentialPlayers = Object.keys(currentState).filter(player => !currentState[player].selected && !currentState[player].excluded);
    
    //sort players by games played
    potentialPlayers = potentialPlayers.sort((a,b) => {return currentState[a].games - currentState[b].games; });

    //get amount of players needed
    let chosenPlayers = potentialPlayers.slice(0, (6 - selectedPlayers.length));

    selectedPlayers.map(i => (
      currentState[i].chosen = true
    ))
    chosenPlayers.map(i => (
      currentState[i].chosen = true
    ))

    this.setState({players: currentState});
  }

  roundComplete = () => {
    let currentState = this.state.players;
    const chosenPlayers = Object.keys(currentState).filter(player => currentState[player].chosen);
    chosenPlayers.map(player => {
      currentState[player].chosen=false;
      currentState[player].games++;
    })
    this.setState({players: currentState});
  }

  resetGames = () => {
    let currentState = this.state.players;
    Object.keys(currentState).map(player => {
      currentState[player].chosen=false;
      currentState[player].games=0;
    })
    this.setState({players: currentState});
  }

  render() {
    console.log(this.state);
    return (
      <div className='mainContainer'>
        <div className='banner'>
          <AddPlayer onAddPlayer={this.handleNewPlayer}/>
        </div>
        <div className='right'>
          <PlayerList players={this.state.players} onUpdatePlayer={this.handleUpdatePlayer} onRemovePlayer={this.handleRemovePlayer}/>
          <div className='footer'>
            <ControlButton onClick={this.choosePlayer} label='Choose Players'/>
            <ControlButton onClick={this.roundComplete} label='Round Complete'/>
            <ControlButton onClick={this.resetGames} label='Reset Games'/>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
