import React, { Component } from 'react';
import data from '../data.js'

class Word extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log(data[0].word)
        return ( 
            <div className = 'crazy word'>
                <h2>{data[0].word}</h2>

            </div>


         );
    }
}
 
export default Word;