import React, { Component } from "react"
import List from "./List"

class App extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            names: []
        }
    }

    createLi = () => {
        return this.state.names.map((names, index) => <List key={index} names={names} />)
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.state.names.push(this.state.name)
        console.log(this.state.names)
    }

    render() {
        return (
            <main>
                <form onSubmit={this.handleSubmit}>
                    <input
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        placeholder="Name"
                    />
                    <br />
                    <button type="submit">Submit</button>
                </form>
                <hr />
                <h1>{this.state.name}</h1>
                <ul>{this.createLi()}</ul>

            </main>
        )
    }
}

export default App