import React from 'react'
import CountdownTimer from "react-component-countdown-timer"

class Countdown extends React.Component {
  render() {
    var settings = {
count: 5,
border: true,
hideDay: true,
hideHours: true,
noPoints: true,
  };

return (
 <CountdownTimer {...settings} />
    );
  }
}

export default Countdown