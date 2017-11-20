import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2017',
      newDeadline: ''
    }
  }

// You must never mutate or change state directly, as in this.state.deadline = 'November 25, 2017'

  changeDeadline() {
    this.setState({deadline: this.state.newDeadline});
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">
        Countdown to {this.state.deadline}
        </div>
        <Clock
          deadline={this.state.deadline}
        />
        <div>
          <input
            placeholder='new date'
            onChange={event => {event => this.setState({newDeadline: event.target.value})}}
          />
          <button onClick={() => this.changeDeadline()}>
          Submit
          </button>
        </div>
      </div>
    )
  }
}


export default App;
