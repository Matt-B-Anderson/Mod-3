
import React, { Component } from "react"
import { Meme } from "./Meme";


class App extends Component {
  constructor() {
    super()
    this.state = {
      meme: {
        id: "",
        image: {},
        topText: "",
        bottomText: ""
      },
      memes: [],
      images: []
    }
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(data => {
        this.setState({
          images: data.data.memes
        })
        this.clear()
      })
  }

  newMeme = () => {
    this.clear()

  }

  edit = (meme) => {
    this.setState({ meme })
  }

  delete = (id) => {
    const filteredMemes = this.state.memes.filter(meme => meme.id !== id);
    this.setState({ memes: filteredMemes })
  }

  setImage = () => {
    this.setState(prevState => {
      const image = this.getImage()
      const meme = { ...prevState.meme, image }
      return { meme }
    })
  }

  clear = () => {
    const meme = {
      image: this.getImage(),
      bottomText: "",
      topText: "",
      id: ""
    }
    this.setState({ meme })
  }

  save = () => {
    this.setState(prevState => {
      if (prevState.meme.id === "") {
        const meme = prevState.meme
        meme.id = performance.now()
        return {
          memes: [...prevState.memes, meme]
        }
      }
    })
  }

  getImage = () => {
    const index = Math.floor(Math.random() * Math.floor(this.state.images.length));
    return this.state.images[index]
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target
    const meme = this.state.meme
    meme[name] = value
    this.setState({ meme })
  }

  render() {
    return (
      <main>
        <section className="meme-maker">
          <Meme meme={this.state.meme} />
          <input
            name="topText"
            value={this.state.meme.topText}
            onChange={this.handleChange}
            placeholder="Top Meme Text"
          />
          <input
            name="bottomText"
            value={this.state.meme.bottomText}
            onChange={this.handleChange}
            placeholder="Punchline"
          />
          <span className="button-wrapper">
            {!this.state.meme.id &&
              <button className="save" onClick={this.save}>Create</button>
            }
            <button className="refresh" onClick={this.setImage}>New Image</button>
            <button className="new-meme" onClick={this.newMeme}>New Meme</button>
          </span>
        </section>
        <section className="meme-list">
          {this.state.memes.map(meme => {
            return <span key={meme.id}>
              <Meme meme={meme} />
              <span className="button-wrapper">
                <button className="edit" onClick={() => this.edit(meme)}>Edit</button>
                <button className="delete" onClick={() => this.delete(meme.id)}>Delete</button>
              </span>
            </span>
          })}
        </section>

      </main>
    )
  }
}

export default App

