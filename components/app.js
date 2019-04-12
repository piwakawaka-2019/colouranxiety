
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { HashRouter as Router, Route, Link } from "react-router-dom";

import Sound from "./Sounds-Win.jsx"

import Header from "./Header.jsx";
import Word from "./Word.jsx";
import Buttons from "./Buttons.jsx";

import Countdown from "./Timer.jsx";
import Win from "./Win.jsx";
import Lose from "./Lose.jsx";
import data from "../data.js";

var min = 0;
var max = 10;

let randomId = Math.floor(Math.random() * (+max - +min)) + +min;

let { id } = data[randomId];

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>

        <Router>

          <div>
            <Route
              exact="true"
              path="/"
              component={() => <Redirect to={`/${id}`} />}
            />
            <Route path="/" component={Header} />
            <Route exact="true" path="/:id" component={Countdown} />

            <Route exact="true" path="/:id" component={Word} />
            <Route exact="true" path="/:id" component={Buttons} />

            <Route path="/result/win" component={Win} />
            <Route path="/result/lose" component={Lose} />
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
