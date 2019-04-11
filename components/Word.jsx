import React, { Component } from 'react';
import data from '../data.js'

var min=0; 
var max=10;  
 
  
let randomId = Math.floor(Math.random() * (+max - +min)) + +min;

class Word extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    
    
    render() { 

        console.log(randomId)
        return ( 
            <div className='crazy word' style= >
             {data[randomId].word}

            </div>


         );
    }
}
 
export default Word;