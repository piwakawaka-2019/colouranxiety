import React from "react";
import CountdownTimer from "react-component-countdown-timer";

class Countdown extends React.Component {
  render() {
    var settings = {
      count: 3,
      border: true,
      hideDay: true,
      hideHours: true,
      noPoints: true,
      onEnd: () => {
        if (this.props.history.location.pathname != "/result/lose") {
          this.props.history.push("/result/lose");
        }
      }
    };

    return <CountdownTimer {...settings} />;
  }
}

export default Countdown;
