import React from 'react';
import './App.css';

import { Login } from './components/login/Login';
import { useLoginState } from './hooks/login/useLoginState';
import { Chat } from './components/chat/Chat';
import { CircularProgress } from '@material-ui/core';


const App: React.FC = () => {
  const { loading, loggedIn } = useLoginState()
  console.log('Loading true')
  return (
    <div className="App">
      {loading && <CircularProgress style={{zIndex: 2000}}/>}
      {/* <Chat /> */}
      {!loggedIn && <Login />}
      {loggedIn && <Chat />}

    </div>
  );
}

export default App;
