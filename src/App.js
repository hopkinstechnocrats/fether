import logo from './logo.svg';
import './App.css';
import RoundBox from './components/RoundBox.js';
import Schedule from './components/Schedule.js'
import Tabs from './components/Tabs.js';
import HostSettings from './components/HostSettings.js';
import Explore from './components/Explore.js'
import Chatboard from './components/Chatboard.js';
import GroupPage from './components/GroupPage.js';
import Profile from './components/Profile.js';

function App() {
  return (
    <Tabs>
      <div label="Schedule">
      <h1>Schedule</h1>
        <Schedule></Schedule>
      </div>
      <div label="Explore">
        <Explore></Explore>
      </div>
      <div label="Profile">
        <Profile></Profile>
      </div>
      <div label="HostSettings">
        <HostSettings></HostSettings>
      </div>
      <div label="Chatboard">
<<<<<<< HEAD
      <h1>Swift Skiers</h1>
=======
        <h1>JungKook Joggers</h1>
>>>>>>> acd04747024200a7154ed6852d45998281a1d50d
        <Chatboard></Chatboard>
      </div>
      <div label="Group">
        <GroupPage></GroupPage>
      </div>
    </Tabs>
  );
}

      


export default App;
