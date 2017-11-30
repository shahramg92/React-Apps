import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {
  state = {
    username: 'Super-Shahram'
  }

  usernameChangedHandler = (event) => {
    this.setState({username: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <UserInput />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="Sofia"/>
      </div>
    );
  }
}

export default App;
