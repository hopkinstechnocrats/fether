import React, { Component } from 'react';
import RoundBox from './RoundBox.js';

function GroupPage() {
    return (
        <div>
            <div className="group-header">
                <RoundBox color="grey">
                    <div>
                    <div className="column">
                        <h1>Group Name</h1>
                    </div>
                    <div className="column">
                        56 members <br/>
                        Founded <b>11/26/2003</b><br/>
                        Running ~ 11:00/mile
                    </div>   
                    </div>
                </RoundBox>
            </div>
            
        </div>
    );
}

export default GroupPage;