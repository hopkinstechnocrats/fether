import React, { Component } from 'react';
import RoundBox from './RoundBox.js';

function Chatboard() {
    return(
        <div className="Chatboard">
            <h1>JungKook Joggers</h1>
            <RoundBox color="sendChat">
                <p>Sending a message out.</p>
            </RoundBox>
            <RoundBox color="receiveChat">
                <p>And I've received your text! lol</p>
            </RoundBox>
        </div>
    );
}

export default Chatboard;