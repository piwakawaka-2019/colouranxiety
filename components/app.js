import React, { Component } from 'react'
import Sound from "./Sounds-Win.jsx"
import Header from './Header.jsx'
import Word from './Word.jsx'
import Buttons from './Buttons.jsx'
// import Countdown from './Timer.jsx'
import Lose from './Lose.jsx'
import Win from './Win.jsx'

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
        {/* <Countdown /> */}
        <Lose />
        <Win />
     
      </div>
     

    ) 

   
  }

}

export default App
