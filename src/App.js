import logo from './logo.svg';
import './App.css';
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
