import React, { Component } from "react";
import data from "../data.js";

import Countdown from "./Timer.jsx";
import { HashRouter as Router, Route, Link } from "react-router-dom";

class Word extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let randomId = this.props.match.params.id;
    let {word, color} =  data.find( x => x.id == randomId)

    
    console.log('random id', randomId, 'colour', color);

    return (
        
      <div className="word" style={{ color }}>
        {word}
      </div>
    );
  }
}

export default Word;
