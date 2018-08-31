import React, { Component } from 'react';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                name="name"
                className="form-control form-control-lg"
                type="text"
                placeholder="Enter Name..."
                value={name}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                className="form-control form-control-lg"
                type="text"
                placeholder="Enter Email..."
                value={email}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                name="phone"
                className="form-control form-control-lg"
                type="text"
                placeholder="Enter Phone Number..."
                value={phone}
                onChange={this.onChange}
              />
            </div>
            <input
              className="btn btn-light btn-block"
              type="submit"
              value="Add Contact"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
