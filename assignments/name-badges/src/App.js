
import React, { Component } from "react"
import Badge from "./Badge"

class App extends Component {
  constructor() {
    super()
    this.state = {
      badge: {
        firstName: "",
        lastName: "",
        email: "",
        pOB: "",
        phone: "",
        favFood: "",
        textArea: ""
      },
      badges: [],
      errors: {
        phone: "",
      }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({ badges: [...this.state.badges, this.state.badge] })
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target
    let errors = this.state.errors
    let badge = this.state.badge;

    switch (name) {

      case "firstName":
        badge.firstName = value;
        break;

      case "lastName":
        badge.lastName = value;
        break;

      case "email":
        badge.email = value;
        break;

      case "pOB":
        badge.pOB = value;
        break;

      case "phone":
        badge.phone = value;
        errors.phone = isNaN(value) ? "Phone must be a number" : "";
        break;

      case "favFood":
        badge.favFood = value;
        break;

      case "textArea":
        badge.textArea = value;
        break;
    }

    this.setState({ badge, errors, [name]: value })
  }

  render() {
    return (
      <main>
        <form onSubmit={this.handleSubmit}>
          <input
            name="firstName"
            value={this.state.badge.firstName}
            onChange={this.handleChange}
            placeholder="First Name"
            minLength="3"
            required
          />
          <br />

          <input
            name="lastName"
            value={this.state.badge.lastName}
            onChange={this.handleChange}
            placeholder="Last Name"
            minLength="3"
            required
          />
          <br />

          <input
            name="email"
            value={this.state.badge.email}
            onChange={this.handleChange}
            placeholder="Email"
            minLength="3"
            required
          />
          <br />

          <input
            name="pOB"
            value={this.state.badge.pOB}
            onChange={this.handleChange}
            placeholder="Place of Birth"
            minLength="3"
            required
          />

          <br />

          <input
            name="phone"
            value={this.state.badge.phone}
            onChange={this.handleChange}
            placeholder="Phone"
            minLength="3"
            required
          />
          {this.state.errors.phone && <p>Phone can only be a number.</p>}

          <br />

          <input
            name="favFood"
            value={this.state.badge.favFood}
            onChange={this.handleChange}
            placeholder="Favorite Food"
            minLength="3"
            required
          />

          <br />

          <textarea
            name="textArea"
            placeholder="Tell us about yourself"
            onChange={this.handleChange}
          />

          <br />


          <button>Submit</button>
        </form>
        <hr />

        <ul>{this.state.badges.map((badge, index) => <Badge key={index} badge={badge} />)}</ul>

      </main >
    )
  }
}

export default App

