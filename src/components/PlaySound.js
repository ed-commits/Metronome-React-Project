import React, { Component, Fragment } from 'react';

class PlaySound extends Component {
    constructor(props) {
        super(props);
        this.state = {
            circleLightSwitch: false
        }
        this.circleLight = this.circleLight.bind(this);
        this.activateMetronome = this.activateMetronome.bind(this);
        this.playIt = this.playIt.bind(this);
    }

    circleLight() {
        return this.state.circleLightSwitch ? "circle-on" : "circle-off";
    }

    activateMetronome() {
        this.setState({ circleLightSwitch:  true });
        this.props.soundFile.play();
        setTimeout(this.playIt, 1000*0.3);
    }

    playIt() {
        this.setState({ circleLightSwitch:  false });
    }

    render() {
        return (
            <>
                <div className={this.circleLight()}></div>
            </>
        )
    }
}

export default PlaySound;