import React, { Component } from 'react';
import Loser from "./Sounds-Lose.jsx"

class Lose extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const handleClick = e => {
      window.location = "/colouranxiety/";
    };

    return (
      <div>
        <h1 className="heading">That Stinks</h1>
        <img
          src={
            "https://ih0.redbubble.net/image.468330822.4032/flat,550x550,075,f.jpg"
          }
        />
        <Loser />
        <br></br>
        <button onClick={handleClick}> Try Again! </button>
      </div>
    );
  }
}

export default Lose;

