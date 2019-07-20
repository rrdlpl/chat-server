import React from 'react';
import './App.css';

import { Login } from './components/login/Login';
import { useLoginState } from './hooks/login/useLoginState';
import { Chat } from './components/chat/Chat';
import { CircularProgress, Dialog, DialogContent } from '@material-ui/core';


const App: React.FC = () => {
  const { loading, loggedIn } = useLoginState()
  console.log('Loading', loading)
  return (
    <div className="App">
      <Dialog open={loading}>
        <DialogContent>
          {loading && <CircularProgress />}
        </DialogContent>
      </Dialog>
      {!loggedIn && <Login />}
      {loggedIn && <Chat />}
    </div>
  );
}

export default App;
