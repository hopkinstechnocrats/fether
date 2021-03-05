import React, { Component } from 'react';
import RoundBox from './RoundBox.js';

function GroupPage() {
    return (
        <div className="container"> 
                <RoundBox color="grey">
                    <div className="row">
                    <div className="column">
                        <h1>Group Name</h1>
                    </div>
                    <div className="column">
                        56 members <br/>
                        Founded <b>11/26/2003</b><br/>
                        Running ~ 11:00/mile
                    </div>   
                    <div className="clear-both">

                    </div>
                    </div>
                </RoundBox>
        </div>
    );
}

export default GroupPage;