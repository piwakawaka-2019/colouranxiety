import React from "react"
const Lose = '../public/lose.mp3'




class Loser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      play: false
      };
      this.url= Lose
      this.audio = new Audio(this.url)
    };
    play(){
      this.setState({
      play:true 
      });
     this.audio.play()
    };
    

render(){
  return(
  <audio src={'/public/lose.mp3'} autoPlay />
  )
  }
}

export default Loser