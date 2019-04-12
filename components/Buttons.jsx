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
        console.log('The object id =', theObjId)

        console.log('The params =', this.props)
     
        
        let theObj =  data.find( x => x.id === theObjId)

           console.log('The obj =', theObj)

        return ( 
            <div>
                <button>RED</button>
                <button>BLUE</button>
                <button>YELLOW</button>
                <button>GREEN</button>
               



            </div>



        );
    }
}
 
export default Buttons;