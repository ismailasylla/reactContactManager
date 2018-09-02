import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import uuid from 'uuid';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    };
    dispatch({ type: 'ADD_CONTACT', payload: newContact });

    //clear state in the input field after form submition
    this.setState({
      name: '',
      email: '',
      phone: ''
    });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={this.onChange}
                  />

                  <TextInputGroup
                    label="Email"
                    name="email"
                    placeholder="email"
                    value={email}
                    onChange={this.onChange}
                  />

                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="phone number"
                    value={phone}
                    onChange={this.onChange}
                  />

                  <input
                    className="btn btn-light btn-block"
                    type="submit"
                    value="Add Contact"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
