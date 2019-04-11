import React, { Component } from 'react'
import Audio from "./Sounds.jsx"

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return(
      <div>
      <h1>Welcome to {this.props.name}</h1>
      <div>
      <button><Audio Win/>Winner</button>
      <button><Audio Lose/>Loser</button>
      </div>
      </div>

    ) 

  }

}

export default App
