import React from 'react';
import './App.css';

import Logo from '../components/logo/Logo'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <Logo short />
      </header>
    </div>
  );
}

export default App;
