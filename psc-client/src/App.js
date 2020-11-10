import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

//Components
import Navbar from './components/Navbar';


// Pages
import home from './pages/home';
import login from './pages/login';
import ships from './pages/ships';
//NEED TO ADD FOR EACH NEW PAGE HERE, AND BELOW AT LINE 46




const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#1565c0',
      },
      secondary: {
        main: '#26c6da',
      }
    },
    typography: {
      useNextVariants: true
    }
})


class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
        <Router>
          <Navbar/>
          <div className="container">
          <Switch>
            <Route exact path="/" component={home}/>
            <Route exact path="/ships" component={ships}/>
            <Route exact path="/login" component={login}/>
          </Switch>
          </div>
        </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
