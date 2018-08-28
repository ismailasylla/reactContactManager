import React, { Component } from 'react';
class List extends Component {
  render() {
    return (
      <div className="card card-body">
        <ul className="list-group">
          <li className="list-group-item">Orange</li>
          <li className="list-group-item">Apple</li>
          <li className="list-group-item">Greps</li>
          <li className="list-group-item">Banana</li>
        </ul>
      </div>
    );
  }
}

export default List;
