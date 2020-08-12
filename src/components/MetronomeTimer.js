import React, { Component } from 'react';

const MetronomeTimer = ( {intervalTime, tick} ) => {

    function startTimer() {
        tick();
        setInterval(tick, intervalTime*1000);
    }

    return (
        <input type="button" value="Play" onClick={startTimer} />
    )

}

export default MetronomeTimer;
