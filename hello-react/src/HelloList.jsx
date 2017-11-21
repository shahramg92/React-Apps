import React, { Component } from  'react';
import HelloMessage from './Hello';

class HelloList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {id: 1, name: 'Shahram', age: 25},
        {id: 2, name: 'Sofia', age: 21},
        {id: 3, name: 'Parsa', age: 26},
        {id: 4, name: 'Borna', age: 25},
        {id: 5, name: 'Eamon', age: 25}
      ]
    }
  }

  render() {
    return (<ul>
      {this.state.people.map((person) =>
        <li key = {person.id}>
          <HelloMessage name={person.name}/>
        </li>
      )}
      </ul>)
  }
}

export default HelloList;
