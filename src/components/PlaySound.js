import React, { Component } from 'react';

class PlaySound extends Component {
    constructor(props) {
        super(props);
        //({ soundFile, intervalTime })
        this.playIt = this.playIt.bind(this);
    }

    playIt() {
        this.props.soundFile.play();
    }

    render() {
        return (
            <button onClick={this.playIt}>PlayTest!</button>
        )
    }
}

export default PlaySound;