import React, { Component } from 'react';
import PlaySound from '../components/PlaySound';

class MetronomeContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            soundFiles: {
                beat: new Audio("/sounds/metro_beat.ogg"),
                clave: new Audio("/sounds/Metronom Claves.ogg")
            },
            intervalTime: 1,
            beatLight: false,
            claveLight: false,
            timeSignature: "4/4",
            timeSignatureCounter: 0
        }
    }

    switchOff = () => {
        this.setState({ beatLight: false, claveLight: false });
    }

    beat = () => {
        this.state.soundFiles["beat"].play();
        this.setState({ beatLight: true });
    }

    clave = () => {
        this.state.soundFiles["clave"].play();
        this.setState({ claveLight: true });
    }

    tick = () => {
        let timeSignatureCounter = (this.state.timeSignatureCounter + 1) % 4;
        this.setState({ timeSignatureCounter: timeSignatureCounter });

        if (this.state.timeSignature === "4/4") {
            this.beat();
        }
        if (this.state.timeSignature === "2/4") {
            if (timeSignatureCounter === 1 || timeSignatureCounter === 3) {
                this.beat();
            }
            else {
                this.clave();
            }
        }

        setTimeout(this.switchOff, 1000 * 0.2);
    }

    startTimer = () => {
        this.tick();
        setInterval(this.tick, this.state.intervalTime * 1000);
    }

    timeSignature = (event) => {
        this.setState({ timeSignature: event.target.value });
    }

    render = () => {
        return (
            <>
                <PlaySound id="beat" circleLightSwitch={this.state.beatLight} />
                <PlaySound id="claves" circleLightSwitch={this.state.claveLight} />
                <button onClick={this.startTimer}>Play</button>
                <select onChange={this.timeSignature}>
                    <option value="4/4">4/4</option>
                    <option value="2/4">2/4</option>
                </select>
            </>
        )
    }
}

export default MetronomeContainer;