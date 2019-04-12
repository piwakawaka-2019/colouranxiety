import React, { Component } from 'react';
import Word from './Word.jsx'
import data from '../data.js'

class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        let theObjId = this.props.match.params.id
        
        let theObj =  data.find( x => x.id == theObjId)

        let winColor = theObj.color

        console.log(this.props)

       const handleClick = (e) => {
           if (theObj.word == e.target.innerHTML) {
               this.props.history.push('/Win.jsx')
           } else {
               this.props.history.push('/Lose.jsx')
           }

            
        }

        return ( 
            <div>
                <button onClick={handleClick}>RED</button>
                <button onClick={handleClick}>BLUE</button>
                <button onClick={handleClick}>YELLOW</button>
                <button onClick={handleClick}>GREEN</button>
               



            </div>



        );
    }
}
 
export default Buttons;