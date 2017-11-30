import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOuput from './UserOuput/UserOutput';


class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput />
        <UserOuput />
        <UserOuput />
      </div>
    );
  }
}

export default App;
