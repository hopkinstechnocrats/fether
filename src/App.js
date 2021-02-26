import logo from './logo.svg';
import './App.css';
import RoundBox from './components/RoundBox.js';
import Schedule from './components/Schedule.js'
import Tabs from './components/Tabs.js';
import HostSettings from './components/HostSettings.js';
import Explore from './components/Explore.js'
import Chatboard from './components/Chatboard.js';

function App() {
  return (
    <Tabs>
      <div label="Schedule">
        <Schedule></Schedule>
      </div>
      <div label="Explore">
        <Explore></Explore>
      </div>
      <div label="Profile">
        <p>Profile</p>
      </div>
      <div label="HostSettings">
        <HostSettings></HostSettings>
      </div>
      <div label="Chatboard">
        <Chatboard></Chatboard>
      </div>
      <div label="Group">
        <GroupPage></GroupPage>
      </div>
    </Tabs>
  );
}

      


export default App;
