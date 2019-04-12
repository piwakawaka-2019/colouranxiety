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

        console.log('winColor',  theObj)

       const handleClick = (e) => {
           if (winColor == e.target.innerHTML.toLowerCase()) {
               this.props.history.push('/result/win')
           } else if(winColor !== e.target.innerHTML) {
               this.props.history.push('/result/lose')
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