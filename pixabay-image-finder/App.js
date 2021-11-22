import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import './App.css';
import NavBar from './components/navbar/NavBar';
import Search from './components/search/Search';

class App extends Component {

  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <div>
            <NavBar />
            <Search />
          </div>
        </MuiThemeProvider>
      </div>  
    );
  }
}

export default App;
