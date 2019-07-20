import React from 'react';
import './App.css';

import { Login } from './components/login/Login';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <Chat /> */}
      <Login />
    </div>
  );
}

export default App;
