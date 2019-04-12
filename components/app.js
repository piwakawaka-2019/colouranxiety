import React, { Component } from 'react'
import Header from './Header.jsx'
import Word from './Word.jsx'
import Buttons from './Buttons.jsx'
import Sound from "./Sounds.jsx"

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
      
        {/* <h1>Welcome to {this.props.name}</h1> */}
        <Header />
        <Word />
        <Buttons />

        
        <div className = 'Sound'>
        <button><Sound />Yeet</button>
        </div>
        
      </div>
      
      
      )
  }

}

export default App
