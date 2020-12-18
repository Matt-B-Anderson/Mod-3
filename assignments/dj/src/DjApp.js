import React from "react"
import Square from "./Square"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            colors: ["white", "white", "white", "white"]
        }
    }

    createSquare = () => {
        return this.state.colors.map((color, index) => <Square key={index} color={color} />)
    }

    whiteBlack = () => {
        this.setState(prevState => {
            if (prevState.colors[0] === "white") {
                return {
                    colors: ["black", "black", "black", "black"]
                }
            }
            else {
                return {
                    colors: ["white", "white", "white", "white"]
                }
            }
        })
    }

    purple = () => {
        this.setState(prevState => {
            return {
                colors: ["purple", "purple", prevState.colors[2], prevState.colors[3]]
            }
        })
    }

    bottomLeft = () => {
        this.setState(prevState => {
            return {
                colors: [prevState.colors[0], prevState.colors[1], "blue", prevState.colors[3]]
            }
        })
    }

    bottomRight = () => {
        this.setState(prevState => {
            return {
                colors: [prevState.colors[0], prevState.colors[1], prevState.colors[2], "blue"]
            }
        })
    }

    render() {
        return (<main>
            <div className="grid">
                {this.createSquare()}
            </div>
            <div className="button-holder">
                <span className="button-wrapper">
                    <button className="djbutton" onClick={this.whiteBlack}>White/Black</button>
                    <button className="djbutton" onClick={this.purple}>Purple</button>
                    <button className="djbutton" onClick={this.bottomLeft}>Blue 1</button>
                    <button className="djbutton" onClick={this.bottomRight}>Blue 2</button>
                </span>
            </div>

        </main>

        )
    }
}

export default App