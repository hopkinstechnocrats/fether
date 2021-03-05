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
                        <h1>Swift Skiers</h1>
                    </div>
                    <div className="column">
                        56 members <br/>
                        Founded <b>11/26/2003</b><br/>
                        Skiing ~ 4:36/mile
                    </div>   
                    </div>
                </RoundBox>
                <p className="textWithMargin">Welcome, we’re a group of friendly skiers! We meet every other Wednesday and at some other events. We are mostly in our 30's but welcome anyone who loves to ski!</p>

                <div className="GroupPage">
                <RoundBox color="grey scrollbox">
                    <h2>Upcoming Workouts</h2>
                    <Schedule></Schedule>
                </RoundBox>
                </div>
                <div className="GroupPage">
                <RoundBox color="grey scrollbox">
                    <h2>Chat</h2>
                    <Chatboard></Chatboard>
                </RoundBox>
                </div>
        </div>
    );
}

export default GroupPage;