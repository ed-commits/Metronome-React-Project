import React, { Component, Fragment } from 'react';

const PlaySound = ({ circleLightSwitch }) => {
    function circleLight(circleLightSwitch) {
        return circleLightSwitch ? "circle-on" : "circle-off";
    }

    return (
        <div className={circleLight(circleLightSwitch)}></div>
    )
}

export default PlaySound;