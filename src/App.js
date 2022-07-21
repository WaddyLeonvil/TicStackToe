import React, {useState, useEffect} from 'react'; 
import './App.css';
import Board from './components/Board';
import Stack from './components/Stack';

function App() {
  const [classic, setClassic] = useState(true);

  const handleButtonToggle = ({target}) => {
    if (target.classList.contains('classic')) {
      setClassic(true);
    }
    else {
      setClassic(false);
    }
  }

  return (
    <div className="App">
      <div className="page-header">
        <div className="toggle">
          <button className={classic ? 'classic active' : 'classic'} onClick={handleButtonToggle} >
            Classic
          </button>
          <button className={!classic ? 'stack active' : 'stack'} onClick={handleButtonToggle} >
            Stack
          </button>
        </div>
      </div>
      <header className="App-header">
        {classic ? <Board /> : <Stack />}
      </header>
    </div>
  );
}

export default App;
