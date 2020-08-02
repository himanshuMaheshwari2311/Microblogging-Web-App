import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import './App.css';
import Sidenav from './components/sidenav/Sidenav';

const dark = createMuiTheme({
  palette: {
    primary: {
      main: '#1e1e1e',
    },
    secondary: {
      main: '#4caf50',
    },
    background: {
      default: '#121212',
      paper: '#121212',
    },
  },
});

const App: React.FC<RouteComponentProps> = () => {
  return (
    <ThemeProvider theme={dark}>
      <Sidenav />
    </ThemeProvider>
  );
}

export default withRouter(App);
