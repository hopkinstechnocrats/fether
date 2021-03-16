import React, { Component } from 'react';
import RoundBox from './RoundBox.js';
import './Chatboard.css';
import './RoundBox.css';

class Chatboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                {
                    outerType: "SendChat",
                    innerType: "sendChat",
                    text: "Sending a message out.",
                    msgkey: 0
                },
                {
                    outerType: "ReceiveChat",
                    innerType: "receiveChat",
                    text: "And I've received your text! lol Let's make this really long and see what happens to it, shall we?",
                    msgkey: 1
                }
            ],
            value: "",
            nextmsgkey: 2
        }
    }

    handleSubmit = (event) => {
        console.log("handling submit");
        this.setState( (state, props) => {
            const newMessage = {
                outerType: "SendChat",
                innerType: "sendChat",
                text: state.value,
                msgkey: state.nextmsgkey
            }
            const newMessages = [...state.messages, newMessage];
            return ({
                messages: newMessages,
                value: "",
                nextmsgkey: state.nextmsgkey + 1
            });
        });
        event.preventDefault();
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    render() {
        let messagejsx = this.state.messages.map(
            (value) => {
                return (
                    <div key={value.msgkey} className={value.outerType}>
                        <RoundBox color={value.innerType}>
                            <p>{value.text}</p>
                        </RoundBox>
                    </div>
                );
            }
        );
        console.log(this.state.messages);
        console.log(this.state.value);
        return (
            <div className="BackgroundBox">
                <RoundBox color="grey">
                    <div className="viewMessages">
                        {messagejsx}
                    </div>
                    <div className="SendingMessages">
                        <form onSubmit={this.handleSubmit}>
                            <input className="Typebox" type="text"
                                name="sent messages"
                                id="sent messages"
                                value={this.state.value} onChange={this.handleChange}></input>
                            <input type="submit" value="submit" />
                        </form>
                    </div>
                </RoundBox>
            </div>
        );
    }
}

export default Chatboard;