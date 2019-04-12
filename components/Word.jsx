import React, { Component } from 'react';
import data from '../data.js'
import { Redirect } from 'react-router-dom'

var min=0; 
var max=10;  

let randomId = Math.floor(Math.random() * (+max - +min)) + +min;

class Word extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    
    
    render() { 

        let {color} = data[randomId]
        let {word} = data[randomId]



        return ( 
            <div className='word' style={{color}} >
             {word}
             <Redirect to={`/${word}`} />
            
            </div>



         );
    }
}
 
export default Word;