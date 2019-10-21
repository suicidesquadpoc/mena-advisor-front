import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomeForm extends Component {
  constructor() {
    super();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleInputChange(e) {}

  render() {
    return (
      <div className="card">
        <div className="form-group">Initial Aplication Home</div>
        <Link to="/">close session</Link>
      </div>
    );
  }
}

export default HomeForm;
