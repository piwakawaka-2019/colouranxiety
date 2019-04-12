import React, { Component } from 'react'
import Audio from "./Sounds.jsx"
import Header from './Header.jsx'
import Word from './Word.jsx'
import Buttons from './Buttons.jsx'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import Countdown from './Timer.jsx'
import Win from './Win.jsx'
import Lose from './Lose.jsx'

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return(
      <div>
        <Router>
        <div>
          <Route path='/' component={Header} />
          <Route exact='true' path='/:id' component={Countdown} />         
          <Route path='/result/win' component={Win} />
          <Route path='/result/lose' component={Lose} />
          <Route exact='true' path='/:id' component={Word} />
          <Route exact='true' path='/:id' component={Buttons} />
 
        </div>
        </Router>  
      </div>

    ) 

   
  }

}

export default App
