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
    <div>
  <button onClick={this.play.bind(this)} type="button"></button>
</div>
  )
  }
}

export default Loser