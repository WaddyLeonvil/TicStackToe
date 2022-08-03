import React, {useState, useEffect} from 'react'; 
import './App.css';
import Checkers from './components/Checkers';
import TicTacToe from './components/TicTacToe';

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
            Tic-Tac-Toe
          </button>
          <button className={!classic ? 'checkers active' : 'checkers'} onClick={handleButtonToggle} >
            Checkers
          </button>
        </div>
      </div>
      <header className="App-header">
        {classic ? <TicTacToe /> : <Checkers />}
      </header>
    </div>
  );
}

export default App;
