import React from 'react';
import './App.css';

import Logo from '../components/logo/Logo'
import Header from '../components/header/Header'

const App: React.FC = () => {
  return (
    <div className="App">
        <Header/>
        <Logo short />
    </div>
  );
}

export default App;
