import React from 'react';
import './App.css';
import { Chat } from './components/chat/Chat';
import io from 'socket.io-client';

const socket = io('https://demo-chat-server.on.ag/');

socket.on('connect', () => {
  console.log('Connected')
  socket.emit('message', { author: 'test', message: 'testing' }); // emit an event to the socket

  socket.on('message', (data: any) => {
    console.log('reply', data)
  })

  socket.emit('command', {})
  socket.on('command', (data: any) => {
    console.log('Received command', data)
  })
})

const App: React.FC = () => {
  return (
    <div className="App">
      <Chat />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
