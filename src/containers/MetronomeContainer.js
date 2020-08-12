import React, { Component } from 'react';
import PlaySound from '../components/PlaySound';

class MetronomeContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            soundFiles: {
                beat: new Audio("/sounds/metro_beat.mp3"),
                clave: new Audio("/sounds/Metronom Claves.mp3")
            },
            beatLight: false,
            claveLight: false,
            timeSignature: "4/4",
            timeSignatureCounter: 0,
            bpm: 60,
            timer: null
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
        if (this.state.timeSignature === "3/4") {
            if (timeSignatureCounter === 1) {
                this.clave();
            }
            else {
                this.beat();
            }
        }

        setTimeout(this.switchOff, 1000 * 0.2);
    }

    startTimer = () => {
        if(this.state.timer !== null) {
            clearTimeout(this.state.timer);
        }

        this.tick();
        this.setState({timer: setTimeout(this.startTimer, this.intervalTime() * 1000)});
    }

    stopTimer =() => {
        clearTimeout(this.state.timer);
        this.setState( { timer: null } );
    }

    timeSignature = (event) => {
        this.setState({ timeSignature: event.target.value });
    }

    intervalTime = () => {
        return 60 / this.state.bpm;
    }

    setBPM = (event) => {
        this.setState({ bpm: event.target.value });
    }

    render = () => {
        return (
            <>
                <div className="metronome-box">
                    <label forhtml="bpm-slider">Set your BPM</label>
                    <input type="range" id="bpm-slider" name="bpm" min="10" max="200" default="60" onChange={this.setBPM}></input>
                    <div className="light-box">
                        <PlaySound id="beat" circleLightSwitch={this.state.beatLight} />
                        <PlaySound id="claves" circleLightSwitch={this.state.claveLight} />
                    </div>
                    <button onClick={this.startTimer}>Play</button>
                    <button onClick={this.stopTimer}>Stop</button>
                    <select onChange={this.timeSignature}>
                        <option value="4/4">4/4</option>
                        <option value="2/4">2/4</option>
                        <option value="3/4">3/4</option>
                    </select>
                </div>
            </>
        )
    }
}

export default MetronomeContainer;