import React, { Component } from 'react';
import RoundBox from './RoundBox.js';
import './Chatboard.css';
import './RoundBox.css';

function Chatboard() {
    return(
        <div className="Chatboard">
            <RoundBox className="BackgroundBox" color="grey">
        <div className="SendChat">
            <RoundBox color="sendChat">
                <p>Sending a message out.</p>
            </RoundBox>
        </div>
        <div className="ReceiveChat">
                <RoundBox color="receiveChat">
                <p>And I've received your text! lol Let's make this really long and see what happens to it, shall we?</p>
            </RoundBox>
        </div>
        <div className="SendingMessages">
            <input className="Typebox" type="text"
            name="sent messages"
            id="sent messages"
            defaultValue="Send a message to the group"></input>
        </div>
        </RoundBox>
        </div>
    );
}

export default Chatboard;