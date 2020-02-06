import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Content from './pages/content';
import Products from './classes/products'
import { ThemeProvider, Box } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";



const theme = createMuiTheme({
    palette: {
      type: 'dark',

      primary: {
        main: '#1d4f5e'
      },
      secondary: {
        main: '#505050'
      }
    }
  });



ReactDOM.render(

<ThemeProvider theme={theme}><CssBaseline/><Content /></ThemeProvider>, 


document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
