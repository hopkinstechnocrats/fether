import React from 'react';
import RoundBox from './RoundBox.js';

class WorkoutScheduleView extends React.Component {

    render() {
        let classname = "RoundBox-"+this.props.color;
        return (
            <div>
                <h3>{this.props.date}</h3>
                <RoundBox color={this.props.color}> 
                        <b>{this.props.title}</b> <br />
                        {this.props.time} <br />
                        {this.props.location} <br />
                </RoundBox>
            </div>
        );
    }
}

export default RoundBox;