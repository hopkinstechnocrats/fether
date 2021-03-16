import React, { Component } from 'react';
import RoundBox from './RoundBox.js';
import './GroupPage.css';
import Schedule from './Schedule.js';
import Chatboard from './Chatboard.js';
import {Link} from 'react-router-dom';

class TrainingPlan extends Component {

    constructor (props) {
        super(props);

        this.state = {
            status: "nonmember"
        }
    }

    transition = {
        "nonmember": "member",
        "member": "member"
    };

    handleClick = () =>
    {
        
        console.log("the button was clicked");
        this.setState((state, props) => {
            console.log(state.status+"-->"+this.transition[state.status]);
            return ({
            status: this.transition[state.status]
        })});
    };

    render() {
        let bottomView;
        if (this.state.status == 'nonmember') {
            bottomView = 
            <div>
                <h4>Group Discount: <b>$26/month</b></h4>
                <RoundBox color="maroon" onClick={this.handleClick}>
                    <h3 className="joinbutton">Purchase Training Plan</h3>
                </RoundBox>
                </div>;
        } else if (this.state.status == "member") {
            bottomView = <div className="container">
            <div className="GroupPage">
            <RoundBox color="grey scrollbox">
                <div className="row">
                    <div className="column">
                    <h2>Upcoming Workouts</h2>
                    </div>
                    <div className="column" className="openButton"> 
                    <Link to={"Schedule"} style={{ textDecoration: 'none', color: 'black'}}>
                    <RoundBox color="teal">
                    <h3>Open</h3>
                    </RoundBox>
                    </Link>
                    </div>
                </div>
                <Schedule></Schedule>
            </RoundBox>
            </div>
            <div className="GroupPage">
            <RoundBox color="grey scrollbox">
            <div className="row">
                    <div className="column">
                    <h2>Chat</h2>
                    </div>
                    <div className="column" className="openButton"> 
                    <Link to={"Chatboard"} style={{ textDecoration: 'none', color: 'black'}}>
                    <RoundBox color="teal">
                    <h3>Open</h3>
                    </RoundBox>
                    </Link>
                    </div>
                </div>
                <Chatboard></Chatboard>
            </RoundBox>
            </div></div>;
        }
        return (
            <div className="container"> 
                    <RoundBox color="grey">
                        <div className="row">
                        <div className="column group-title">
                            <h1>10k Training Plan</h1>
                        </div>
                        <div className="column">
                            32 members <br/>
                            Founded <b>11/26/2003</b><br/>
                            Running ~7:30/mile
                        </div>   
                        </div>
                    </RoundBox>
                    <p className="textWithMargin">Welcome to our 10k training group! We are a group of athletes who want to push ourselves to improve our 10k times and our fitness.</p>

                {bottomView}
            </div>
        );
}
}

export default TrainingPlan;