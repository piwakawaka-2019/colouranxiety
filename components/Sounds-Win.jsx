import React from "react"
const Win = '../public/win.mp3'




class Sounds extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      play: false
      };
      this.url= Win
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
  <audio src={'/public/win.mp3'} autoPlay />
</div>
  )
  }
}

export default Sounds