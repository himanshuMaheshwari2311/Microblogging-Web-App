import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import './App.css';
import Sidenav from './Sidenav/Sidenav';

const dark = createMuiTheme({
  palette: {
    primary: {
      main: grey[800],
    },
    secondary: {
      main: grey[50],
    },
    background: {
      default: grey[700],
      paper: grey[500],
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
