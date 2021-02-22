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
        Founded <b>11/26/2003</b><br></br>
        Running ~ 5:43/mile</p>
      </RoundBox>
      <RoundBox color="orange">
        <p><u><b>Swift Skiers</b></u><br></br>
        13 members<br></br>
        Founded <b>12/13/1989</b><br></br>
        Skiing ~ 4:36/mile</p>
      </RoundBox>
      <RoundBox color="darkTeal">
        <p><u><b>Hunger For Divergent Hill Dominators</b></u><br></br>
        56 members <br></br>
        Founded <b>11/20/2003</b><br></br>
        Running ~ 11:00/mile</p>
      </RoundBox>
      </RoundBox>
    </div>
  );
}

      


export default App;
