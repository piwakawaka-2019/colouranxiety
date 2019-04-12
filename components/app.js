import React, { Component } from 'react'
import Header from './Header.jsx'
import Word from './Word.jsx'
import Buttons from './Buttons.jsx'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Router>
        <div>
          <Route path='/' component={Header} />
          <Route path='/:id' component={Word} />
          <Route path='/:id' component={Buttons} />
        </div>
        </Router>  
      </div>
      
      
      )
  }

}

export default App
