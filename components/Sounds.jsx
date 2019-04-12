import React from "react"

class Audio extends React.Component {
  constructor(props) {
    super(props);
	this.playAudio = () => {
		switch(this.state.selectedColor){
			case "winner":
				this.win.play();
			case "loser":
				this.lose.play();
		
									   }
	}
	  
  }
  render() {
    return (
      <div className="stage">
		<audio ref={(winner) => { this.win = winner; }}>
			<source src="../public/Win-Sound.mp3" type="audio/mpeg" >
			</source>
		</audio>
		<audio ref={(loser) => { this.lose = loser; }}>
			<source src="../public/Lose-Sound.mp3" type="audio/mpeg" >
			</source>
		</audio>
    </div>
    );
  }
}


export default Audio





