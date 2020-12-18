import React, { Component } from "react"
import HitList from "./HitList"

class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      person: []
    }
  }

  componentDidMount() {
    this.setState({ loading: true })
    fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          person: data
        })
      })
  }

  render() {
    const text = this.state.loading ? "loading..." : ""
    return (
      <main>
        <div>
          <p>{text}</p>

          <div className="hitlist" >{this.state.person.map((person, index) => <HitList key={index} person={person} />)}
          </div>

        </div>
      </main>
    )
  }
}

export default App
