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
import TrainingPlan from './components/TrainingPlan';

function App() {
  return (
    <Tabs>
      <div label="Schedule">
      <h1>Schedule</h1>
        <Schedule></Schedule>
      </div>
      <div label="Explore" icon={<i class="fas fa-globe-americas"></i>}>
        <Explore> </Explore>
      </div>
      <div label="Profile" icon={<i class="fas fa-user-alt"></i>}>
        <Profile></Profile>
      </div>
      <div label="Host Settings">
        <HostSettings></HostSettings>
      </div>
      <div label="Chatboard">
        <h1>Swift Skiers</h1>
        <Chatboard></Chatboard>
      </div>
      <div label="Group" icon={<i class="fas fa-users"></i>}>
        <GroupPage>
        </GroupPage>
      </div>
      <div label="TrainingPlan">
        <TrainingPlan></TrainingPlan>
      </div>
    </Tabs>
  );
}
      


export default App;
