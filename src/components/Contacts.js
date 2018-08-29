import React, { Component } from 'react';

import Contact from './Contact';

class Contacts extends Component {
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

  deleteContact = id => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);
    this.setState({
      contacts: newContacts
    });
  };

  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
