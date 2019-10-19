import React, { Component } from 'react';

class LoginForm extends Component {
  constructor () {
    super();
    this.state = {
      user: '',
      password: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      user: '',
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
              name="user"
              className="form-control"
              value={this.state.user}
              onChange={this.handleInputChange}
              placeholder="User"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="password"
              className="form-control"
              value={this.state.responsible}
              onChange={this.handleInputChange}
              placeholder="Password"
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