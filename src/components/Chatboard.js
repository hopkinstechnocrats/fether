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
                    text: "Sending a message out."
                },
                {
                    outerType: "ReceiveChat",
                    innerType: "receiveChat",
                    text: "And I've received your text! lol Let's make this really long and see what happens to it, shall we?"
                }
            ],
            value: "Send a message to the group"
        }
    }

    handleSubmit = (event) => {
        console.log("handling submit");
        this.setState( (state, props) => {
            const newMessage = {
                outerType: "SendChat",
                innerType: "sendChat",
                text: state.value
            }
            const newMessages = [...state.messages, newMessage];
            return ({
                messages: newMessages,
                value: ""
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
                    <div key={value.text} className={value.outerType}>
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