import React, { Component } from 'react';
import RoundBox from './RoundBox.js';
import './Chatboard.css';
import './RoundBox.css';

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
        <div className="SendingMessages">
            <label for="sent messages">Send a message to the group</label>
            <input class="Chatbox" type="text"
            name="sent messages"
            id="sent messages"></input>
        </div>

        </div>
    );
}

export default Chatboard;