import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

// csubcomponents
import LoginForm from './components/LoginForm';


class App extends Component {
  constructor() {
    super();
    /*this.state = {
      todos
    }*/
    this.handleAddLogin = this.handleAddLogin.bind(this);
  }

  /*removeTodo(index) {
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index
      })
    });
  }*/

  handleAddLogin() {
    console.log('Hago mi inicio de session');
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


/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
