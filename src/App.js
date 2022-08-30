import React, { useState, useEffect, useRef } from 'react'; 
import './App.css';
import 'antd/dist/antd.css';
import { w3cwebsocket } from 'websocket';
import { Input } from 'antd';
import Checkers from './components/Checkers';
import TicTacToe from './components/TicTacToe';

const { Search } = Input;
const client = new w3cwebsocket('ws://127.0.0.1:8000');

function App() {

  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
     client.onopen = () => { 
      console.log('WebSocket client connected.');
     };
     client.onmessage = (message) => {
      const data = JSON.parse(message.data);
      console.log('Got reply! ', data);
      if (data.type === 'message') {
        setMessages([...messages, {
          msg: data.msg,
          user: data.user
        }])
      }
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
      msg: message,
      user: username
    }));
  }

  const clearMessages = () => {
    setMessages([]);
  }

  return (
    <div className="App">
      {isLoggedIn ?
        <>
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
          <div className="user-msgs">{messages.map(msg => <p className='user-msg'>Message: {msg.msg}, User: {msg.user}</p>)}</div>
          <header className="App-header">
            {classic ? <TicTacToe /> : <Checkers />}
          </header>
        </>
        :
        <div className="App-header">
          <div className='username'>
            <Search placeholder='Enter Username' enterButton='Login' size='large' onSearch={value => {setIsLoggedIn(true); setUsername(value)}} />
          </div>
        </div>
      }
    </div>
  );
}

export default App;
