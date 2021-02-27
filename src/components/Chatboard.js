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
                <p>And I've received your text! lol Let's make this really long and see what happens to it, shall we?</p>
            </RoundBox>
        </div>
    );
}

export default Chatboard;