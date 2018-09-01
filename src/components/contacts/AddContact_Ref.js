import React, { Component } from 'react';

class AddContact extends Component {
  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  state = {
    name: '',
    email: '',
    phone: ''
  };

  onSubmit = e => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };

    console.log(contact);
  };

  static defaultProps = {
    name: 'Fred Smith',
    email: 'fred@gmail.com',
    phone: '666-666-6666'
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone } = this.props;
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
                defaultValue={name}
                ref={this.nameInput}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                className="form-control form-control-lg"
                type="text"
                placeholder="Enter Email..."
                defaultValue={email}
                ref={this.emailInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                name="phone"
                className="form-control form-control-lg"
                type="text"
                placeholder="Enter Phone Number..."
                defaultValue={phone}
                ref={this.phoneInput}
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
