import React, {Component} from 'react';
import PlaySound from '../components/PlaySound';

class MetronomeContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            soundFile: new Audio("/sounds/metro_beat.ogg"),
            intervalTime: null
        }
    }
    

    render() {
        return (
            <PlaySound soundFile={this.state.soundFile} intervalTime={this.state.intervalTime} />
        )
    }

}

export default MetronomeContainer;