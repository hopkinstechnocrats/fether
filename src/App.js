import logo from './logo.svg';
import './App.css';
import RoundBox from './components/RoundBox.js';

function App() {
  return (
    <div className="App">
      <h1>explore</h1>
      <RoundBox color="grey">

      <RoundBox color="teal">
        <p><b><u>JungKook Joggers</u></b><br></br>
        56 members<br></br>
        Founded 11/26/2003<br></br>
        Running ~ 5:43/mile</p>
      </RoundBox>
      <RoundBox color="orange">
        <p><u><b>Swift Skiers</b></u><br></br>
        13 members<br></br>
        Founded 12/13/1989<br></br>
        Skiing ~ 4:36/mile</p>
      </RoundBox>
      <RoundBox color="darkTeal">
        <p><u><b>Hunger For Divergent Hill Dominators</b></u><br></br>
        56 members <br></br>
        Founded 11/20/2003<br></br>
        Running ~ 11:00/mile</p>
      </RoundBox>
      <RoundBox color="teal">
        <p><u><b>Raging Runners</b></u><br></br>
        17 members<br></br>
        Founded 1/1/2000<br></br>
        Running ~ 10:00/mile</p>
      </RoundBox>
      <RoundBox color="orange">
        <p><u><b>BTS Bikers</b></u><br></br>
        777 members<br></br>
        Founded 6/12/2013<br></br>
        Biking ~ 7 mph</p>
      </RoundBox>
      <RoundBox color="darkTeal">
      <p><u><b>BTS Bikers</b></u><br></br>
        777 members<br></br>
        Founded 6/12/2013<br></br>
        Biking ~ 7 mph</p>
      </RoundBox>
      </RoundBox>
    </div>
import Schedule from './components/Schedule.js'
import Tabs from './components/Tabs.js';

function App() {
  return (
    <Tabs>
      <div label="Schedule">
        <Schedule></Schedule>
      </div>
      <div label="Explore">
        <p>Explore</p>
      </div>
      <div label="Profile">
        <p>Profile</p>
      </div>
    </Tabs>
  );
}

      


export default App;
