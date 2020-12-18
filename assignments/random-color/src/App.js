import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor() {
    super()
    this.state = {
      color: {}
    }
  }


  componentDidMount() {
    axios.get(`http://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`).then((response) => {
      this.setState({
        color: response.data
      })
      console.log(this.state.color)
    })
  }

  render() {
    return (
      <main>
        <div className="color" style={{ backgroundColor: `#${this.state.color.new_color}` }}></div>
      </main>
    )
  }
}

export default App;