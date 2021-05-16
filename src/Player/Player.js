import React from "react";
import './Player.css';

class Player extends React.Component {

    constructor(props) {
        super(props);
        this.toggleSelected = this.toggleSelected.bind(this);
        this.toggleExcluded = this.toggleExcluded.bind(this);
    }

    updateParent = (newState) => {
        this.props.onUpdate(this.props.name, newState);
    }

    removePlayer = (e) => {
        e.stopPropagation();
        this.props.onRemove(this.props.name);
    }

    toggleSelected(e) {
        e.preventDefault()
        this.updateParent({selected: !this.props.selected, excluded: false});
    }

    toggleExcluded(e) {
        e.preventDefault()
        this.updateParent({excluded: !this.props.excluded, selected: false});
    }

    render() {
        let clss = 'container';
        if (this.props.chosen) {
            clss += ' chosen';
        } 
        if(this.props.selected) {
            clss += ' selected';
        } else {
            if (this.props.excluded) {
                clss += ' excluded';
            } else {
                clss += ' default';
            }
        }
        return (
            <div className={clss} onClick={this.toggleSelected} onContextMenu={(e)=> this.toggleExcluded(e)}>
                <p className="title">
                    {this.props.name} - {this.props.games} games
                </p>
                <input type='button' value='X' onClick={(e)=> this.removePlayer(e)}/>
            </div>
        );
    }
}

export default Player;
