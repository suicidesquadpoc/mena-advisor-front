import React, { Component } from "react";

class RegistryForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      username: "",
      password: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    //this.props.onAddTodo(this.state);
    this.setState({
      email: "",
      username: "",
      password: ""
    });

    console.log("veo mi variable props", this.props.history);
    this.props.history.push("/");
  }

  handleInputChange(e) {
    const { value, name } = e.target;
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
                  name="email"
                  className="form-control"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  value={this.state.username}
                  onChange={this.handleInputChange}
                  placeholder="username"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="password"
                  className="form-control"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  placeholder="password"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Registry
              </button>
            </form>
          </div>
    );
  }
}

export default RegistryForm;
