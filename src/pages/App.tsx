import React from 'react';

import { createMuiTheme } from '@material-ui/core/styles';

import './App.css';
import Logo from '../components/logo/Logo'
import Header from '../components/header/Header'
import { ThemeProvider } from '@material-ui/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#a3a3a2',
      main: '#E9E9E8',
      dark: '#ededec',
      // contrastText: '#fff',
    },
    secondary: {
      light: '#b26500',
      main: '#ff9100',
      dark: '#ffa733',
    },
  },
});

const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
          <Header/>
          <Logo short />
      </ThemeProvider>
    </div>
  );
}

export default App;
