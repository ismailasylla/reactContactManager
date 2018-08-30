import React, { Component } from 'react';
import Contacts from './components/Contacts';
import Header from './components/Header';
import { Provider } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  render() {
    // const name = 'isma';
    // const email = 'john@gmail.com';
    // const phone = '555-555-5555';

    return (
      <Provider>
        <div className="App">
          <Header />
          <div className="container">
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
