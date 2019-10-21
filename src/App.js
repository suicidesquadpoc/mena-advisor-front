import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// csubcomponents
import LoginForm from "./components/LoginForm";
import RegistryForm from "./components/RegistryForm";
import HomeForm from "./components/HomeForm";

class App extends Component {
  constructor() {
    super();
    this.handleAddLogin = this.handleAddLogin.bind(this);
  }

  handleAddLogin() {
    console.log("action of login");
  }

  handleAddRegistry() {
    console.log("Proces registry contact");
  }

  render() {
    // RETURN THE COMPONENT
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            Tasks
            <span className="badge badge-pill badge-light ml-2">(1)</span>
          </a>
        </nav>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 text-center">
              <img src={logo} className="App-logo" alt="logo" />
              <Router>
                <Route exact path="/" component={LoginForm} />
                <Route path="/registry" component={RegistryForm} />
                <Route path="/home" component={HomeForm} />
              </Router>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
