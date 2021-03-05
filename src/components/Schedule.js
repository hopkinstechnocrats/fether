import React from 'react';
import RoundBox from './RoundBox.js'
import WorkoutScheduleView from './WorkoutScheduleView.js';
import './Schedule.css'

class Schedule extends React.Component {

    render() {
        return (
            <div className="schedule">
                <RoundBox className="backgroundBox" color="grey">
                <WorkoutScheduleView date="January 21" color="orange" time="9:00 - 10:00 AM" title="Long Run" location="108 Jardine Ave, Jackson, MT 59736 " />
                <WorkoutScheduleView date="January 21" color="teal" time="9:00 - 10:00 AM" title="Long Run" location="108 Jardine Ave, Jackson, MT 59736 " />
                <WorkoutScheduleView date="January 21" color="darkTeal" time="9:00 - 10:00 AM" title="Long Run" location="108 Jardine Ave, Jackson, MT 59736 " />
                </RoundBox>
            </div>
        );
    }
}

export default Schedule;