import RoundBox from './RoundBox.js';
import './HostSettings.css';

function HostSettings() {
    return(
    <div className="HostSettings">
        <h1>settings</h1>
        <hr></hr>
        <RoundBox color="grey">
            <RoundBox color="darkTeal">
                <p><b>Group Name:</b><br></br></p>
                <RoundBox color="teal">
                    <p>Swimmy Seniors</p>
                </RoundBox>
            </RoundBox>
            <RoundBox color="darkTeal">
                <p><b>Pace:</b></p>
                <RoundBox color="teal">
                    <p>15:30/mile</p>
                </RoundBox>
            </RoundBox>
            <RoundBox color="darkTeal">
                <p><b>Group Description:</b></p>
                <RoundBox color="teal">
                    <p>Just a couple of swimmy seniors looking to have to a good time in the water! Meetings every other Wednesday.</p>
                </RoundBox>
            </RoundBox>
            <RoundBox color="darkTeal">
                <p><b>Upcoming Workouts:</b><br></br>
                Name:</p>
                <RoundBox color="teal">
                    <p>Sunrise Swim</p>
                </RoundBox>
                <p>Date:</p>
                <RoundBox color="teal">
                    <p>7/13/2021</p>
                </RoundBox>
                <p>Time:</p>
                <RoundBox color="teal">
                    <p>6:15     AM</p>
                </RoundBox>
                <p>Pace:</p>
                <RoundBox color="teal">
                    <p>15:50 / mile</p>
                </RoundBox>
                <p>Location:</p>
                <RoundBox color="teal">
                    <p>4135 W Lake Harriet Pkwy</p>
                </RoundBox>
                </RoundBox>
        </RoundBox>

        <RoundBox color="maroon">
          <p>hi please work now</p>
        </RoundBox>
        
    </div>
    );
}

export default HostSettings;