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
            intervalTime: 1
        }
        this.tick = this.tick.bind(this);

        // this.beat = <PlaySound id="beat" soundFile={this.state.soundFiles['beat']} />
        // this.claves = <PlaySound id="claves" soundFile={this.state.soundFiles['claves']} />
    }

    tick(condition) {
 //       this.state.soundFiles["beat"].play();
//        this.setState({ beatLight: true });

        // trigger PlaySound beat, to play+lightup -- activateMetronome
        // this.beat.activeMetronome();
        // condition? <PlaySound id="beat" soundFile={this.state.soundFiles['beat']} /> :
    }   //             <PlaySound id="claves" soundFile={this.state.soundFiles['claves']} />

    render() {
        return (
            <>
                <PlaySound id="beat" soundFile={this.state.soundFiles['beat']} />
                <PlaySound id="claves" soundFile={this.state.soundFiles['claves']} />
                <MetronomeTimer intervalTime={this.state.intervalTime} tick={this.tick}/>
            </>
        )
    }

}

export default MetronomeContainer;