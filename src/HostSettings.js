import RoundBox from './components/RoundBox.js';
import logo from './logo.svg';
import './HostSettings.css';

function HostSettings() {
    return(
    <div className="HostSettings">
        <h1>Host Settings</h1>
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
                <RoundBox color="teal">
                    <p></p>
                </RoundBox>
            </RoundBox>
        </RoundBox>
    </div>
    );
}