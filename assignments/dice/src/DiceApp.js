import React from "react"
import Dice from "./Dice"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            num5: 0
        }
    }

    getNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    handleClick = () => {
        this.setState({
            num1: this.getNumber(1, 6),
            num2: this.getNumber(1, 6),
            num3: this.getNumber(1, 6),
            num4: this.getNumber(1, 6),
            num5: this.getNumber(1, 6),
        })
    }

    render() {
        return (<div>
            <div className="grid">
                <Dice number={this.state.num1} />
                <Dice number={this.state.num2} />
                <Dice number={this.state.num3} />
                <Dice number={this.state.num4} />
                <Dice number={this.state.num5} />
            </div>
            <button className="dicebutton" onClick={this.handleClick}>Get Numbers!</button>
        </div>

        )
    }
}

export default App