import React from "react";
import './ControlButton.css';

class ControlButton extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <input type="button" onClick={this.props.onClick} value={this.props.label}/>
        );
    }
}

export default ControlButton;
