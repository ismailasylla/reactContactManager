import React, { Component } from 'react';
const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };

    case 'ADD_CONTACT':
      return {
        ...state,
        contacts:[action.payload, ...state.contacts]
      };

    default:
      return state;
  }
};

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
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
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
