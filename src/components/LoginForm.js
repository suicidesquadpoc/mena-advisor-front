import React, { Component } from 'react';

class LoginForm extends Component {
  constructor () {
    super();
    this.state = {
      usuario: '',
      password: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      usuario: '',
      password: ''
    });
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="usuario"
              className="form-control"
              value={this.state.usuario}
              onChange={this.handleInputChange}
              placeholder="Usuario"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="password"
              className="form-control"
              value={this.state.responsible}
              onChange={this.handleInputChange}
              placeholder="Contraseña"
              />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    )
  }

}

export default LoginForm;