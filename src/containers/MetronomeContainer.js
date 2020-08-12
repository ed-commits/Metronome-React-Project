import React, { Component } from 'react';
import PlaySound from '../components/PlaySound';
import MetronomeTimer from '../components/MetronomeTimer';

class MetronomeContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            soundFiles: {
                beat: new Audio("/sounds/metro_beat.ogg"),
                claves: new Audio("/sounds/Metronom Claves.ogg")
            },
            intervalTime: 1,
            beatLight: false,
            claveLight: false
        }
//        this.switchOff = this.switchOff.bind(this);
//        this.tick = this.tick.bind(this);
    }

    switchOff = () => {
        this.setState({ beatLight: false, claveLight: false });
    }

    tick = () => {
        this.state.soundFiles["beat"].play();
        this.setState({ beatLight: true });
        setTimeout(this.switchOff, 1000*0.2);
    }

    render = () => {
        return (
            <>
                <PlaySound id="beat" circleLightSwitch={this.state.beatLight} />
                <PlaySound id="claves" circleLightSwitch={this.state.claveLight} />
                <MetronomeTimer intervalTime={this.state.intervalTime} tick={this.tick}/>
            </>
        )
    }

}

export default MetronomeContainer;