import React, { Component } from 'react'
import Header from './Header.jsx'
import Word from './Word.jsx'

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
        
      </div>
      
      
      )
  }

}

export default App
