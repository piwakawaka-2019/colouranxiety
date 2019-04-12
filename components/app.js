import React, { Component } from 'react'
import Audio from "./Sounds.jsx"
import Header from './Header.jsx'
import Word from './Word.jsx'
import Buttons from './Buttons.jsx'
import Countdown from './Timer.jsx'

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return(
      <div>
        {/* <h1>Welcome to {this.props.name}</h1> */}
        <Header />
        <Word />
        <Buttons />
        <Countdown />
        
      </div>

    ) 

   
  }

}

export default App
