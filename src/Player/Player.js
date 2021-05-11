import React from "react";
import './Player.css';

class Player extends React.Component {

    constructor(props) {
        super(props);
        this.toggleSelected = this.toggleSelected.bind(this);
        this.toggleExcluded = this.toggleExcluded.bind(this);
        this.state = {
            selected: false,
            excluded: false,
        }
    }

    toggleSelected(e) {
        e.preventDefault()
        const currentSelected = this.state.selected;
        const currentExcluded = this.state.excluded;
        this.setState({selected: !currentSelected, excluded: false});
    }

    toggleExcluded(e) {
        e.preventDefault()
        const currentSelected = this.state.selected;
        const currentExcluded = this.state.excluded;
        this.setState({selected: false, excluded: !currentExcluded});
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
                <p className="title">{this.props.name}</p>
            </div>
        );
    }
}

export default Player;
