import React from 'react'
import CountdownTimer from "react-component-countdown-timer"

class Countdown extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render() {
    var settings = {
    count: 5,
    border: true,
    hideDay: true,
    hideHours: true,
    noPoints: true,
    onEnd: ( ) => {
      this.props.history.push('/result/lose')
    },     

  };

  

return (
 <CountdownTimer {...settings} />
    );
  }
}

export default Countdown