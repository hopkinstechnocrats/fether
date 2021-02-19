import logo from './logo.svg';
import './App.css';
import RoundBox from './components/RoundBox.js'

function App() {
  return (
    <div className="App">
      <RoundBox color="teal"> 
      <p>Example teal box</p>
      </RoundBox>
      <RoundBox color="grey"> 
      <p>Example grey box</p>
      </RoundBox>
      <RoundBox color="orange"> 
      <p>Example orange box</p>
      </RoundBox>
    </div>
  );
}

export default App;
