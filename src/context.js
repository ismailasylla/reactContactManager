import React, { Component } from 'react';

const Context = React.createContext();
export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'isma',
        email: 'syldox@gmail.com',
        phone: '555-555-5555'
      },
      {
        id: 2,
        name: 'Brahim',
        email: 'brahimx@gmail.com',
        phone: '444-444-4444'
      },
      {
        id: 3,
        name: 'Titi',
        email: 'titi@gmail.com',
        phone: '666-666-6666'
      }
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
