import React, { Component } from 'react';
import PlaySound from '../components/PlaySound';

class MetronomeContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            soundFiles: {
                beat: new Audio("/sounds/metro_beat.ogg"),
                claves: new Audio("/sounds/Metronom Claves.ogg")
            },
            intervalTime: null
        }
    }


    render() {
        return (
            <>
                <PlaySound soundFile={this.state.soundFiles['beat']} intervalTime={this.state.intervalTime} />
                <PlaySound soundFile={this.state.soundFiles['claves']} intervalTime={this.state.intervalTime} />
            </>
        )
    }

}

export default MetronomeContainer;