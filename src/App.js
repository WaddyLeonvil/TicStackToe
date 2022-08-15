import React, {useState, useEffect} from 'react'; 
import './App.css';
import { w3cwebsocket } from 'websocket';
import Checkers from './components/Checkers';
import TicTacToe from './components/TicTacToe';

const client = new w3cwebsocket('ws://127.0.0.1:8000');

function App() {

  useEffect(() => {
     client.onopen = () => { 
      console.log('WebSocket client connected.');
     };
     client.onmessage = (message) => {
      const data = JSON.parse(message.data);
      console.log('Got reply! ', data);
     }
  }, []);

  const [classic, setClassic] = useState(true);

  const handleButtonToggle = ({target}) => {
    if (target.classList.contains('classic')) {
      setClassic(true);
    }
    else {
      setClassic(false);
    }
  }

  const onButtonClicked = (message) => {
    client.send(JSON.stringify({
      type: 'message',
      msg: message
    }));
  }

  return (
    <div className="App">
      <div className="page-header">
        <button onClick={() => onButtonClicked("Hello")}>Send message</button>
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
