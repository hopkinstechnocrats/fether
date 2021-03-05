import React, { Component } from 'react';
import RoundBox from './RoundBox.js';
import './GroupPage.css';
import Schedule from './Schedule.js';
import Chatboard from './Chatboard.js';

function GroupPage() {
    return (
        <div className="container"> 
                <RoundBox color="grey">
                    <div className="row">
                    <div className="column group-title">
                        <h1>Group Name</h1>
                    </div>
                    <div className="column">
                        56 members <br/>
                        Founded <b>11/26/2003</b><br/>
                        Running ~ 11:00/mile
                    </div>   
                    </div>
                </RoundBox>
                <p className="textWithMargin">Welcome! We’re a group of friendly, neighborhood joggers. Most of our members are 50+ years old, and we get together every Sunday to walk/run a marathon.</p>
                <div className="column">
                <div className="row">
                <RoundBox color="grey scrollbox boundedScrollbox">
                    <h2>Upcoming Workouts</h2>
                    <Schedule></Schedule>
                </RoundBox>
                </div>
                <div className="row">
                <RoundBox color="grey scrollbox boundedScrollbox">
                    <h2>Chat</h2>
                    <Chatboard></Chatboard>
                </RoundBox>
                </div>
                </div>
        </div>
    );
}

export default GroupPage;