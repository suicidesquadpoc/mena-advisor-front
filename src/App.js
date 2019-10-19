import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

// csubcomponents
import LoginForm from './components/LoginForm';


class App extends Component {
  constructor() {
    super();
    this.handleAddLogin = this.handleAddLogin.bind(this);
  }

  handleAddLogin() {
    console.log('action of login');
  }

  render() {
    // RETURN THE COMPONENT
    return (
      <div className="App">

        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            Tasks
            <span className="badge badge-pill badge-light ml-2">
              (1)
            </span>
          </a>
        </nav>

        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 text-center">
                <img src={logo} className="App-logo" alt="logo" />
              <LoginForm onAddTodo={this.handleAddLogin}></LoginForm>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
