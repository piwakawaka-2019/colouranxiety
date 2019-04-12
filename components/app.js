import React, { Component } from 'react'
import Header from './Header.jsx'
import Word from './Word.jsx'
import Buttons from './Buttons.jsx'

import {HashRouter as Router, Route, Link} from 'react-router-dom'

import Lose from './Lose.jsx'
import Win from './Win.jsx'


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
          <Route path='/:word' component={Word} />
          <Route path='/:word' component={Buttons} />
        </div>
        </Router> 

      </div>
      
      
      )
  }

}

export default App
