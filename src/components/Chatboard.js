import React, { Component } from 'react';
import RoundBox from './RoundBox.js';
import './Chatboard.css';
import './RoundBox.css';

class Chatboard extends Component {
    constructor(props) {
        super(props);
        this.state = {messages: [
            {
                outerType: "SendChat",
                innerType: "sendChat",
                text: "Sending a message out."
            },
            {
                outerType: "ReceiveChat",
                innerType: "receiveChat",
                text: "And I've received your text! lol Let's make this really long and see what happens to it, shall we?"
            }
        ]}
    }

    render() {
        return(
            <div className="Chatboard">
                <div className="BackgroundBox">
                <RoundBox color="grey">
                {this.state.messages.map(
                (value) => {
                    return (
                        <div className={value.outerType}>
                            <RoundBox color={value.innerType}>
                                <p>{value.text}</p>
                            </RoundBox>
                        </div>
                    );
                }
            )}
            <div className="SendingMessages">
                <input className="Typebox" type="text"
                name="sent messages"
                id="sent messages"
                defaultValue="Send a message to the group"></input>
            </div>
            </RoundBox>
            </div>
            </div>
            
        );
    }
}

export default Chatboard;